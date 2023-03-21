import React from 'react';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {Question} from '../../types';
import {flip} from '../cardContainer/cardContainerSlice';

// pass question and answer in as props from parent component
const Card = (id: string, question: Question) => {
  const {questionText, answer, topics, flipped} = question;
  const dispatch = useDispatch();

  const topicList: string[] = [];
  topics.forEach((el: string) => topicList.push(el));

  console.log(question);
  // add logic for flipping card
  return (
    <div id={'card' + id} className="card" onClick={() => dispatch(flip(id))}>
      <div>{String(flipped)}</div>
      <div>{flipped ? answer : questionText}</div>
      <div>{flipped ? topics : 'buttons'}</div>
    </div>
  );
};

export default Card;
