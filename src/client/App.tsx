import React from 'react';
import CardContainer from '../features/cardContainer/cardContainer';
import {Counter} from '../features/counter/Counter';
import Navbar from '../features/navbar/BootstrapNavbar';
import 'bootstrap';

const App = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
    </div>
  );
};

export default App;
