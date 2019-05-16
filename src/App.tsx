import React from 'react';
import './App.css';

import Calculator from './component/Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>This is a calculator</h2>
      <Calculator/>
    </div>
  );
}

export default App;
