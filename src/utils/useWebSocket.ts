import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { useAppSelector } from '@/app/hooks';
import { selectConnection, setConnected, setPulled } from '@/store/connectionSlice';
import { addLog } from '@/store/logSlice';


export const useWebSocketHook = () => {
  const dispatch = useDispatch();
  const conn = useAppSelector(selectConnection);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);
  console.log("status = ", conn.addressStatus);

  useEffect(() => {
    if (conn.addressStatus)
      ws.current = io(conn.address);
  }, [conn.addressStatus]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.on('message', (data) => {
      console.log(data);
    });

    ws.current.on('page_size', (data) => {
      console.log(data);
    });

    ws.current.on('page_index', (data) => {
      console.log(data);
    });



  }, [conn]);
  return { isPaused };
};
