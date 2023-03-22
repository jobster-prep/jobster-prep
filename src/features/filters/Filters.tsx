import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';
import {Question} from '../../types';
import FilterControl from '../filterControls/FilterControl';
import {filterQuestions} from '../cardContainer/cardContainerSlice';

const Filters = () => {
  const allQuestions = useSelector((state: RootState) => state.cardContainer.allQuestions);
  const filterOptions = useSelector((state: RootState) => state.filter.filterOptions);
  const filterStatus = useSelector((state: RootState) => state.filter.filterOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterQuestions(filterOptions));
  }, [filterOptions]);

  // get all topics from allQuestions
  const topicSet = new Set<string>();
  allQuestions.forEach((el: Question) => topicSet.add(el.topic));
  // render one filterButton per topic
  //const topicList: any = Array.from(topicSet);
  //for testing:
  const topicList = ['topic1', 'topic2', 'topic3'];
  const filterControls = [];
  for (let i = 0; i < topicList.length; i++) {
    const toggleStatus = filterStatus[topicList[i]];
    filterControls.push(FilterControl(String(i), topicList[i], toggleStatus));
  }
  return <div>{filterControls}</div>;
};

export default Filters;
