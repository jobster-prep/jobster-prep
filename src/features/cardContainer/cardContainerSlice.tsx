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
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 2',
      answer: 'Answer 2',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 3',
      answer: 'Answer 3',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 4',
      answer: 'Answer 4',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 5',
      answer: 'Answer 5',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 6',
      answer: 'Answer 6',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 7',
      answer: 'Answer 7',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 8',
      answer: 'Answer 8',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 9',
      answer: 'Answer 9',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 10',
      answer: 'Answer 10',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 1a',
      answer: 'Answer 1',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 2a',
      answer: 'Answer 2',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 3a',
      answer: 'Answer 3',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 4a',
      answer: 'Answer 4',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 5a',
      answer: 'Answer 5',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 6a',
      answer: 'Answer 6',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 7a',
      answer: 'Answer 7',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 8a',
      answer: 'Answer 8',
      topic: 'topic2',
      flipped: false,
    },
    {
      questionText: 'Question 9a',
      answer: 'Answer 9',
      topic: 'topic1',
      flipped: false,
    },
    {
      questionText: 'Question 10a',
      answer: 'Answer 10',
      topic: 'topic2',
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

    // modify to only pull from filtered topics
    replace: (state, action: PayloadAction<string>) => {
      console.log('replacing ' + action.payload);
      const index: number = parseInt(action.payload);
      const oldQuestion: Question = state.displayedQuestions[index];
      const newQuestion: Question = state.filteredQuestions[0];
      // set flipped to true because flip() flips the card whenever anywhere in the card is clicked
      newQuestion.flipped = true;
      state.displayedQuestions[index] = newQuestion;
      state.filteredQuestions.push(oldQuestion);
      state.filteredQuestions = state.allQuestions.slice(1);
    },

    // load array of questions fetched from DB, into store
    fetchCards: (state, action: PayloadAction<Question[]>) => {
      state.allQuestions = action.payload;
    },

    // filter out any cards whose topic is not associated with "true" in filter options
    filterQuestions: (state, action: PayloadAction<FilterOptionsType>) => {
      state.filteredQuestions = state.allQuestions.filter(
        (el: Question) => action.payload[el.topic]
      );
      // check if any currently displayed cards need to be filtered
      for (let i = 0; i < state.displayedQuestions.length; i++) {
        const {topic} = state.displayedQuestions[i];
        if (!action.payload[topic]) {
          console.log('filtering out ' + i);
          const oldQuestion = state.displayedQuestions[i];
          const newQuestion = state.filteredQuestions[0];
          newQuestion.flipped = false;
          state.allQuestions.push(oldQuestion);
          state.displayedQuestions[i] = newQuestion;
        }
      }
    },
  },
});

// export reducers here
export const {flip, replace, drawFirstCards, fetchCards, filterQuestions} =
  cardContainerSlice.actions;

export default cardContainerSlice.reducer;
