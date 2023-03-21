import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {Question, FilterOptionsType} from '../../types';
import CardContainer from './cardContainer';

export interface CardContainerState {
  allQuestions: Question[];
  filteredQuestions: Question[];
  displayedQuestions: Question[];
}

const initialState: CardContainerState = {
  allQuestions: [
    {
      questionText: 'Question 1',
      answer: 'Answer 1',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 2',
      answer: 'Answer 2',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 3',
      answer: 'Answer 3',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 4',
      answer: 'Answer 4',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 5',
      answer: 'Answer 5',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 6',
      answer: 'Answer 6',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 7',
      answer: 'Answer 7',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 8',
      answer: 'Answer 8',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 9',
      answer: 'Answer 9',
      topic: 'topic',
      flipped: false,
    },
    {
      questionText: 'Question 10',
      answer: 'Answer 10',
      topic: 'topic',
      flipped: false,
    },
  ],
  displayedQuestions: [],
  filteredQuestions: [],
};

export const cardContainerSlice = createSlice({
  name: 'cardContainer',
  initialState,
  reducers: {
    // flip over a card
    flip: (state, action: PayloadAction<string>) => {
      console.log('flipping ' + action.payload);
      // slice the number off the end of the card's ID string
      const cardNum: number = Number(action.payload);
      state.displayedQuestions[cardNum].flipped = !state.displayedQuestions[cardNum].flipped;
    },

    // draw the first cards from the deck
    drawFirstCards: state => {
      state.displayedQuestions = state.allQuestions.slice(0, 6);
      // shift and push questions that were drawn to the bottom of the "deck" (allQuestions)
      // state.allQuestions = state.allQuestions.slice(6).concat(state.displayedQuestions);
      state.allQuestions = state.allQuestions.slice(6);
      console.log('allQuestions: ', state.allQuestions);
    },
    replace: (state, action: PayloadAction<string>) => {
      console.log('replacing ' + action.payload);
      const index: number = parseInt(action.payload);
      const oldQuestion: Question = state.displayedQuestions[index];
      const newQuestion: Question = state.allQuestions[0];
      // set flipped to true because flip() flips the card whenever anywhere in the card is clicked
      newQuestion.flipped = true;
      state.displayedQuestions[index] = newQuestion;
      state.allQuestions.push(oldQuestion);
      state.allQuestions = state.allQuestions.slice(1);
    },

    // load array of questions fetched from DB, into store
    fetchCards: (state, action: PayloadAction<Question[]>) => {
      state.allQuestions = action.payload;
    },

    // filter out any cards whose topic is not associated with "true" in filter options
    filterCards: (state, action: PayloadAction<FilterOptionsType>) => {
      state.filteredQuestions = state.allQuestions.filter(
        (el: Question) => action.payload[el.topic]
      );
    },
  },
});

// export reducers here
export const {flip, replace, drawFirstCards, fetchCards} = cardContainerSlice.actions;

export default cardContainerSlice.reducer;
