import React from 'react';
import './App.css';
import Game from './lights out/Game/Game';
// import Hangman from './hangman/Hangman'
// import ColorsContainer from './color boxes/ColorsContainer';
// import FlibCoin from './coin flip/FlibCoin';
// import Pokedex from './pokemon/Pokedex/Pokedex';
// import StateClicker from './state clicker/StateClicker';
// import DiceEx from './dice exercise/RollDice';

function App() {
  return (
    <div className="App">
      {/* <Pokedex /> */}
      <br />
      {/* <StateClicker /> */}
      <br/>
      {/* <DiceEx /> */}
      <br/>
      {/* <FlibCoin /> */}
      <br/>
      {/* <ColorsContainer /> */}
      <br/>
      {/* <Hangman /> */}
      <br/>
      <Game />
    </div>
  );
}

export default App;
