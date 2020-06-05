import React from 'react';
import './App.css';
import Pokedex from './pokemon/Pokedex/Pokedex';
import StateClicker from './state clicker/StateClicker';

function App() {
  return (
    <div className="App">
      <Pokedex />
      <br />
      <StateClicker />
    </div>
  );
}

export default App;
