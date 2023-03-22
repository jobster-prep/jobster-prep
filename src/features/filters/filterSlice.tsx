import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Question, FilterOptionsType} from '../../types';

export interface FilterState {
  filterOptions: FilterOptionsType;
}

const initialState = {
  filterOptions: {
    topic1: true,
    topic2: true,
    topic3: false,
  },
};
console.log('filterOptions: ' + JSON.stringify(initialState.filterOptions));

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setUpFilter: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((el: string) => {
        state.filterOptions[el] = true;
      });
    },

    toggleFilter: (state, action: PayloadAction<string>) => {
      console.log('toggling ', action.payload);
      state.filterOptions[action.payload] = !state.filterOptions[action.payload];
    },

    setSame: (state, action: PayloadAction<boolean>) => {
      for (const el in state.filterOptions) {
        state.filterOptions[el] = action.payload;
      }
    },
  },
});

export const {setUpFilter, toggleFilter, setSame} = filterSlice.actions;
export default filterSlice.reducer;
