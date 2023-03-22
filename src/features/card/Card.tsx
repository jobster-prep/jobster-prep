import React from 'react';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {Question} from '../../types';
import {flip, replace} from '../cardContainer/cardContainerSlice';
import Button from 'react-bootstrap/Button';

// pass question and answer in as props from parent component
const Card = (id: string, question: Question) => {
  const {questionText, answer, topic, flipped} = question;
  const dispatch = useDispatch();

  // return (
  //   <div key={`card${id}`} id={`card${id}`} className="card" onClick={() => dispatch(flip(id))}>
  //     <div>{flipped ? answer : questionText}</div>
  //     <div>
  //       {flipped ? (
  //         <Button
  //           className="cardButton"
  //           aria-label="New Question"
  //           onClick={() => dispatch(replace(id))}
  //         >
  //           New Card
  //         </Button>
  //       ) : (
  //         <div className="topicDiv">{topic}</div>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div key={`card${id}`} id={`card${id}`} className="card" onClick={() => dispatch(flip(id))}>
      <div>{flipped ? answer : questionText}</div>
      <div>
        {flipped ? (
          <Button
            className="cardButton"
            aria-label="New Question"
            onClick={() => {
              dispatch(replace(id));
            }}
          >
            New Card
          </Button>
        ) : (
          <div className="topicDiv">{topic}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
