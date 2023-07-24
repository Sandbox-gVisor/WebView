import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface ConnectionState {
  socket: WebSocket;
  address: string;
  connected: boolean;
  pulled: boolean;
}

const initialState: ConnectionState = {
  socket: new WebSocket(""),
  address: "ws://localhost:8888",
  connected: false,
  pulled: false,
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    setPulled: (state, action: PayloadAction<boolean>) => {
      state.pulled = action.payload;
    }
  },
});

export const { setAddress, setConnected, setPulled } = connectionSlice.actions;

export const selectConnection = (state: RootState) => state.connection;
export default connectionSlice.reducer;

