import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ModalState {
  isModalShowing: boolean;
  selectedTopic: string;
}

const initialState: ModalState = {
  isModalShowing: false,
  selectedTopic: '',
};

export const addQuestionSlice = createSlice({
  name: 'addQuestion',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isModalShowing = !state.isModalShowing;
    },
    updateSelectedTopic: (state, action: PayloadAction<string>) => {
      state.selectedTopic = action.payload;
    },
  },
});

export const {toggleModal, updateSelectedTopic} = addQuestionSlice.actions;
export default addQuestionSlice.reducer;
