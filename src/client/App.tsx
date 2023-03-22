import React from 'react';
import CardContainer from '../features/cardContainer/cardContainer';
import Navbar from '../features/navbar/BootstrapNavbar';
import AlertMessage from '../features/alert/AlertMessage';
import {useSelector} from 'react-redux';
import 'bootstrap';
import {RootState} from '../app/store';

const App = () => {
  // only render an alert message if there is one
  const msg = useSelector((state: RootState) => state.cardContainer.alert);

  return (
    <div>
      <Navbar />
      <CardContainer />
      {msg && AlertMessage(msg)}
    </div>
  );
};

export default App;
