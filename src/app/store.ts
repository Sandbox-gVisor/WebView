import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import connectionReducer from '@/store/connectionSlice';
import logReducer from '@/store/logSlice';

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
    logs: logReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
