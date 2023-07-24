import { addressStore } from '@/store/addressStore';
import { connectionStore } from '@/store/connectionStore';
import { logStore } from '@/store/logStore';
import { useState, useEffect, useRef, useSyncExternalStore } from 'react';

export const useWebSocketHook = () => {
  const [logs, setLogs] = useState([]);
  const address = useSyncExternalStore(addressStore.subscribe, addressStore.getSnapshot);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    console.log("address = ", address);
    ws.current = new WebSocket(address);
    ws.current.onopen = () => {
      ws.current.send("pull");
      connectionStore.setConnected(true);
    }
    ws.current.onclose = () => connectionStore.setConnected(false);

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, [address]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {
      if (isPaused) return;
      console.log(e.data)
      const value = JSON.parse(e.data);
      console.log(value);
      logStore.addLogs(value);
      // todo connectionStore is pulled
    };
  }, [isPaused]);
  return {
    logs
  };
};
