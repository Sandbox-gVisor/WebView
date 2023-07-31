import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

type TPage = "view" | "edit";

export interface navigationStore {
  page: TPage
}

const initialState: navigationStore = {
  page: "view",
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: (state, action: PayloadAction<TPage>) => {
      state.page = action.payload;
    },
  },
});

export const { setNavigation } = navigationSlice.actions;
export const selectPage = (state: RootState) => state.navigation.page;
export default navigationSlice.reducer;

