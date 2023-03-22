import React from 'react';
import CardContainer from '../features/cardContainer/cardContainer';
import {Counter} from '../features/counter/Counter';
import Navbar from '../features/navbar/BootstrapNavbar';
import AddQuestionModal from '../features/addQuestion/addQuestion';
import AlertMessage from '../features/alert/AlertMessage';
import {useSelector} from 'react-redux';
import 'bootstrap';
import {RootState} from '../app/store';

const App = () => {
  // only render an alert message if there is one
  const msg = useSelector((state: RootState) => state.cardContainer.alert);
  const selectedTopic = useSelector((state: RootState) => state.addQuestion.selectedTopic);
  const isModalShowing = useSelector((state: RootState) => state.addQuestion.isModalShowing);
  const filterOptions = useSelector((state: RootState) => state.filter.filterOptions);
  return (
    <div>
      <Navbar />
      <CardContainer />
      {isModalShowing && AddQuestionModal(filterOptions, selectedTopic)}
      {msg && AlertMessage(msg)}
    </div>
  );
};

export default App;
