import React from 'react';
import {Person} from './components/Person'

function App() {
  const name:string='Sion';
  return (
    <div className="App">
      <Person name="Shion" age={20} email="sion0012@outlook.jp" />
    </div>
  );
}

export default App;
