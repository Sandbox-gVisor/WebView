import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { TLog } from '@/utils/types';

export interface LogState {
  logs: Array<TLog>;
  pageIndex: number;
  pageSize: number;
}

const initialState: LogState = {
  logs: [],
  pageIndex: 0,
  pageSize: 100,
};

export const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<TLog>) => {
      state.logs = [...state.logs, action.payload];
    },
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    }
  },
});

export const { addLog, setPageSize, setPageIndex } = logSlice.actions;

export const selectLogs = (state: RootState) => state.logs;
export default logSlice.reducer;

