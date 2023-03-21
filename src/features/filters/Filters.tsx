import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';
import {Question} from '../../types';
import FilterControl from '../filterControls/FilterControl';

const Filters = () => {
  const allQuestions = useSelector((state: RootState) => state.cardContainer.allQuestions);

  // state: make filter buttons toggleable

  // get all topics from allQuestions
  const topicSet = new Set<string>();
  allQuestions.forEach((el: Question) => topicSet.add(el.topic));
  // render one filterButton per topic
  const topicList: any = Array.from(topicSet);
  const filterControls = [];
  for (let i = 0; i < topicList.length; i++) {
    filterControls.push(FilterControl(String(i), topicList[i]));
  }
};

export default Filters;
