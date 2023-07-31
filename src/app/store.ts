import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import connectionReducer from '@/store/connectionSlice';
import logReducer from '@/store/logSlice';
import filterReducer from '@/store/filterSlice';
import navigationReducer from '@/store/navigationSlice';

export const store = configureStore({
  reducer: {
    connection: connectionReducer,
    logs: logReducer,
    filter: filterReducer,
    navigation: navigationReducer
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
