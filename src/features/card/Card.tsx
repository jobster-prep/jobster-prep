import React from 'react';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {Question} from '../../types';
// import slice methods from cardslice for component functionality

// pass question and answer in as props from parent component
const Card = (props: Question) => {
  const {question, answer, topics, flipped} = props;
  const dispatch = useDispatch();

  const topicList: string[] = [];
  topics.forEach((el: string) => topicList.push(el));

  // add logic for flipping card
  return (
    <div>
      <div>{flipped ? answer : question}</div>
      <div>Topics</div>
    </div>
  );
};

export default Card;
