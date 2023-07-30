import {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import io from 'socket.io-client';

import {useAppSelector} from '@/app/hooks';
import {selectConnection, setConnected, setPulled} from '@/store/connectionSlice';
import {setLogs, selectLogs, setLength} from '@/store/logSlice';
import {selectFilter, setClicked} from '@/store/filterSlice';


export const useWebSocketHook = () => {
  const dispatch = useDispatch();
  const conn = useAppSelector(selectConnection);
  const logStore = useAppSelector(selectLogs);
  const filterStore = useAppSelector(selectFilter);
  const [isPaused] = useState(false);
  const ws = useRef(null);

  // @ts-ignore
  const receiveLogs = (data: any) => {
    const logs = data;
    if (!conn.pulled) {
      dispatch(setPulled(true));
    }
    dispatch(setLogs(logs));
  }

  useEffect(() => {
    if (conn.addressStatus)
      // @ts-ignore
      ws.current = io(conn.address);
    dispatch(setConnected(true));
  }, [conn.addressStatus]);

  useEffect(() => {
    if (!ws.current) return;
    // @ts-ignore
    ws.current.on('data', (data) => {
      receiveLogs(data);
    });
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

  useEffect(() => {
    if (!ws.current) return;
    if (!filterStore.clicked) return;
    // @ts-ignore
    ws.current.emit("filter", filterStore, (response) => {
      dispatch(setLogs(response.logs));
      dispatch(setLength(response.len));
    });
    dispatch(setClicked(false));
  }, [filterStore.clicked]);

  return {isPaused};
};
