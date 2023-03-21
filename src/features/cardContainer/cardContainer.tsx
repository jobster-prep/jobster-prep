import React, {ReactElement} from 'react';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../card/Card';

const CardContainer = () => {
  const questions = useSelector((state: RootState) => state.cardContainer.questions);
  const dispatch = useDispatch();

  const cards: ReactElement[] = [];
  for (let i = 0; i < questions.length; i++) {
    cards.push(Card(questions[i]));
  }
  return <div>{cards}</div>;
};

export default CardContainer;
