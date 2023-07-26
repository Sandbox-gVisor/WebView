import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { useAppSelector } from '@/app/hooks';
import { selectConnection, setConnected, setPulled } from '@/store/connectionSlice';
import { addLog, selectLogs, setLength } from '@/store/logSlice';
import { messageToLog } from './types';


export const useWebSocketHook = () => {
  const dispatch = useDispatch();
  const conn = useAppSelector(selectConnection);
  const logStore = useAppSelector(selectLogs);
  const [isPaused] = useState(false);
  const ws = useRef(null);

  const receiveLogs = (data: any) => {
    console.log(data)
    const newLog = {
      index: data.index,
      log: messageToLog(JSON.parse(data.log)),
    }
    dispatch(addLog(newLog));
    dispatch(setPulled(true));
  }

  useEffect(() => {
    if (conn.addressStatus)
      // @ts-ignore
      ws.current = io(conn.address);
    dispatch(setConnected(true));
  }, [conn.addressStatus]);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.on('data', (data) => {
      receiveLogs(data);
    });
    //
    // // @ts-ignore
    // ws.current.on('page_size', (data) => {
    //   receiveLogs(data);
    // });
    //
    // // @ts-ignore
    // ws.current.on('page_index', (data) => {
    //   receiveLogs(data);
    // });
    //
    // @ts-ignore
    ws.current.on('length', (data) => {
      dispatch(setLength(Number(data)));
    });
  }, [conn]);

  useEffect(() => {
    if (!ws.current) return;
    // @ts-ignore
    ws.current.emit("set_page", logStore.pageIndex);
  }, [logStore.pageIndex]);

  useEffect(() => {
    if (!ws.current) return;
    // @ts-ignore
    ws.current.emit("set_size", logStore.pageSize);
  }, [logStore.pageSize]);

  return { isPaused };
};
