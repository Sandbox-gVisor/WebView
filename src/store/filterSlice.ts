import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface FilterState {
  clicked: boolean;
  applyed: boolean;
  level: {
    debug: boolean,
    warning: boolean,
    info: boolean,
  },
  type: {
    enter: boolean,
    exit: boolean,
  },
  prefix: string,
  taskname: string,
  syscallname: string,
}

const initialState: FilterState = {
  clicked: false,
  applyed: false,
  level: { debug: true, warning: true, info: true },
  type: { enter: true, exit: true },
  prefix: "",
  taskname: "",
  syscallname: ""
};

export const filterStore = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setApplyed: (state, action: PayloadAction<boolean>) => {
      state.applyed = action.payload;
    },
    setPrefix: (state, action: PayloadAction<string>) => {
      state.prefix = action.payload;
    },
    setTaskname: (state, action: PayloadAction<string>) => {
      state.taskname = action.payload;
    },
    setSysCallName: (state, action: PayloadAction<string>) => {
      state.syscallname = action.payload;
    },
    setLevel: (state, action: PayloadAction<{ debug: boolean, warning: boolean, info: boolean }>) => {
      state.level = action.payload;
    },
    setType: (state, action: PayloadAction<{ enter: boolean, exit: boolean }>) => {
      state.type = action.payload;
    },
    setClicked: (state, action: PayloadAction<boolean>) => {
      state.clicked = action.payload;
    }
  },
});

export const {
  setApplyed, setPrefix, setTaskname,
  setSysCallName, setLevel, setType,
  setClicked
} = filterStore.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterStore.reducer;

