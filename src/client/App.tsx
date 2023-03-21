import React from 'react';
import CardContainer from '../features/cardContainer/cardContainer';
import {Counter} from '../features/counter/Counter';

const App = () => {
  return (
    <div>
      <Counter />;
      <CardContainer />;
    </div>
  );
};

export default App;
