import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Question, FilterOptionsType} from '../../types';

export interface FilterState {
  filterOptions: FilterOptionsType;
}

const initialState = {
  filterOptions: {},
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setUpFilter: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((el: string) => {
        //@ts-ignore
        state.filterOptions[el] = true;
      });
    },

    toggleFilter: (state, action: PayloadAction<string>) => {
      state.filterOptions[action.payload] = !state.filterOptions[action.payload];
    },
  },
});

export const {setUpFilter, toggleFilter} = filterSlice.actions;
export default filterSlice.reducer;
