import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Question} from '../../types';

export interface CardContainerState {
  questions: Question[];
}

const initialState: CardContainerState = {
  questions: [
    {
      questionText: 'Question 1',
      answer: 'Answer 1',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      questionText: 'Question 2',
      answer: 'Answer 2',
      topics: ['topic1, topic3'],
      flipped: false,
    },
    {
      questionText: 'Question 3',
      answer: 'Answer 3',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      questionText: 'Question 4',
      answer: 'Answer 4',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      questionText: 'Question 5',
      answer: 'Answer 5',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      questionText: 'Question 6',
      answer: 'Answer 6',
      topics: ['topic1, topic2'],
      flipped: false,
    },
  ],
};

export const cardContainerSlice = createSlice({
  name: 'cardContainer',
  initialState,
  reducers: {
    flip: (state, action: PayloadAction<string>) => {
      console.log('flipping ' + action.payload);

      //for now, slice the number off the end of the card's ID string
      //it doesn't make sense to change
      const cardNum: number = Number(action.payload);
      state.questions[cardNum].flipped = !state.questions[cardNum].flipped;
    },
  },
});

// export reducers here
export const {flip} = cardContainerSlice.actions;

export default cardContainerSlice.reducer;
