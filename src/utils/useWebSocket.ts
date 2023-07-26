import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { useAppSelector } from '@/app/hooks';
import { selectConnection } from '@/store/connectionSlice';
import { addLog } from '@/store/logSlice';
import { TMessege, messgeToLog } from './types';


export const useWebSocketHook = () => {
  const dispatch = useDispatch();
  const conn = useAppSelector(selectConnection);
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  const receiveLogs = (data: string) => {
    console.log(data)
    const message: TMessege = JSON.parse(data);
    if (!message) {
      return
    }
    dispatch(addLog(
      messgeToLog(message)
    ));
  }

  useEffect(() => {
    if (conn.addressStatus)
      ws.current = io(conn.address);
  }, [conn.addressStatus]);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.on('message', (data) => {
      receiveLogs(data);
    });

    ws.current.on('page_size', (data) => {
      receiveLogs(data);
    });

    ws.current.on('page_index', (data) => {
      receiveLogs(data);
    });

  }, [conn]);
  return { isPaused };
};
