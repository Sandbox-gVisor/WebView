import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/app/hooks';
import { selectConnection, setConnected, setPulled } from '@/store/connectionSlice';
import { addLog } from '@/store/logSlice';


export const useWebSocketHook = () => {
  const dispatch = useDispatch();
  const conn = useAppSelector(selectConnection);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(conn.address);
    ws.current.onopen = () => {
      console.log("opened");
      ws.current.send("pull");
    }
    ws.current.onclose = () => dispatch(setConnected(false));

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, [conn.addressStatus]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {
      if (isPaused) return;
      console.log(e.data);
      const value = JSON.parse(e.data);
      console.log(value);

      dispatch(addLog(value));

      if (!conn.pulled) {
        dispatch(setPulled(true));
      }
    };
  }, [conn]);
  return { isPaused };
};
