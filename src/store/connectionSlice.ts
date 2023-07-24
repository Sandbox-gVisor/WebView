import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface ConnectionState {
  addressStatus: boolean;
  address: string;
  connected: boolean;
  pulled: boolean;
}

const initialState: ConnectionState = {
  addressStatus: false,
  address: "ws://localhost:8888",
  connected: false,
  pulled: false,
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    connectToSocket: (state) => {
      state.addressStatus = true;
    },
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

export const { setAddress, setConnected, setPulled, connectToSocket } = connectionSlice.actions;
export const selectConnection = (state: RootState) => state.connection;
export default connectionSlice.reducer;

