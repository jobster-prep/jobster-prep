import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Question} from '../../types';

export interface CardContainerState {
  questions: Question[];
}

const initialState: CardContainerState = {
  questions: [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      topics: ['topic1, topic3'],
      flipped: false,
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
      topics: ['topic1, topic2'],
      flipped: false,
    },
    {
      question: 'Question 6',
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
    // add a reducer to filter or replenish cards
  },
});

// export reducers here
export const {} = cardContainerSlice.actions;

export default cardContainerSlice.reducer;
