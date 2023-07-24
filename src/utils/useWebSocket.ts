import { addressStore } from '@/store/addressStore';
import { useState, useEffect, useRef, useSyncExternalStore } from 'react';

export const useWebSocketHook = () => {
  const address = useSyncExternalStore(addressStore.subscribe, addressStore.getSnapshot);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    console.log("address = ", address);
    ws.current = new WebSocket(address);
    ws.current.onopen = () => ws.current.send("pull");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, [address]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {
      if (isPaused) return;
      console.log("e", e.data);
    };
  }, [isPaused]);
  const pull = () => {
    ws.current.send("pull");
  }
  return {
    setPause, pull,
  };
};
