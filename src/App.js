import React from 'react';
import './App.css';
import DeckofCards from './lifecycle exercise/DeckofCards';
// import Game from './yahtzee/Game/Game';
// import TodoList from './todo list/TodoList/TodoList';
// import Game from './lights out/Game/Game';
// import Hangman from './hangman/Hangman'
// import ColorsContainer from './color boxes/ColorsContainer';
// import FlibCoin from './coin flip/FlibCoin';
// import Pokedex from './pokemon/Pokedex/Pokedex';
// import StateClicker from './state clicker/StateClicker';
// import DiceEx from './dice exercise/RollDice';

function App() {
  return (
    <div className="App">
      {/* <Pokedex />
      <hr />
      <StateClicker />
      <hr/>
      <DiceEx />
      <hr/>
      <FlibCoin />
      <hr/>
      <ColorsContainer />
      <hr/>
      <Hangman />
      <hr/>
      <Game />
      <hr/>
      <TodoList />
      <hr/> 
      <Game /> */}
      <DeckofCards />
    </div>
  );
}

export default App;
