import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { TLog } from '@/utils/types';

export interface LogState {
  logs: Array<TLog>;
  pageIndex: number;
  pageSize: number;
  total: number;
}

const initialState: LogState = {
  logs: [],
  pageIndex: 0,
  pageSize: 10,
  total: 100,
};

export const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<{ index: number, log: TLog }>) => {
      state.logs[action.payload.index] = action.payload.log;
    },
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
      state.logs = [];
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.logs = [];
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    }
  },
});

export const { addLog, setPageSize, setPageIndex, setLength } = logSlice.actions;

export const selectLogs = (state: RootState) => state.logs;
export default logSlice.reducer;

