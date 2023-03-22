import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';
import {Question} from '../../types';
import FilterControl from '../filterControls/FilterControl';

const Filters = () => {
  const allQuestions = useSelector((state: RootState) => state.cardContainer.allQuestions);
  const filterOptions = useSelector((state: RootState) => state.filter.filterOptions);
  // state: make filter buttons toggleable

  // get all topics from allQuestions
  const topicSet = new Set<string>();
  allQuestions.forEach((el: Question) => topicSet.add(el.topic));
  // render one filterButton per topic
  //const topicList: any = Array.from(topicSet);
  //for testing:
  const topicList = ['topic1', 'topic2', 'topic3'];
  const filterControls = [];
  for (let i = 0; i < topicList.length; i++) {
    const toggleStatus = filterOptions[topicList[i]];
    filterControls.push(FilterControl(String(i), topicList[i], toggleStatus));
  }
  return <div>{filterControls}</div>;
};

export default Filters;
