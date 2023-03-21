import React, {ReactElement} from 'react';
import {useEffect} from 'react';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../card/Card';
import {drawFirstCards, fetchCards} from './cardContainerSlice';

const CardContainer = () => {
  const questions = useSelector((state: RootState) => state.cardContainer.displayedQuestions);
  const dispatch = useDispatch();

  // for testing, before database is ready
  // once DB is ready, change initial state of allquestions
  // make fetch request from here, pass questions as payload, and update state
  useEffect(() => {
    dispatch(drawFirstCards());
  }, []);

  // look into createAsyncThunk
  /*
  useEffect(() => {
    const getCards = async () => {
      const cards = await fetch('/questions', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return cards;
    };
    const cards = getCards();
    dispatch(fetchCards(cards))
  });
  */

  const cards: ReactElement[] = [];
  for (let i = 0; i < questions.length; i++) {
    cards.push(Card(String(i), questions[i]));
  }
  return <div className="cardContainer">{cards}</div>;
};

export default CardContainer;
