import React, { Component } from "react";
import Dice from "../Dice/Dice";
import ScoreTable from "../ScoreTable/ScoreTable";
import "./Game.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map(d => d=1),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      isFinish: false,
      totalScore: 0,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.checkFinish = this.checkFinish.bind(this);
    this.calcScore = this.calcScore.bind(this);
    this.playAgainHandler = this.playAgainHandler.bind(this);
  }

  static defaultProps = {
    description: [
      '1 point per 1',
      '2 points per 2',
      '3 points per 3',
      '4 points per 4',
      '5 points per 5',
      '6 points per 6',
      'Sum all dice if 3 are the same',
      'Sum all dice if 4 are the same',
      '25 points for a full house',
      '30 points for a small straight',
      '40 points for a large straight',
      '50 points for Yahtzee',
      'Sum of all dice',
    ]
  }

  componentDidMount() {
    this.animateRoll();
  }

  animateRoll() {
    this.setState({rolling: true});
    setTimeout(() => {
      this.roll();
      this.setState({rolling: false});
    }, 500);
  }

  roll() {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
    }));

    // Check if the game is over or not
    this.checkFinish();
  }

  checkFinish() {
    this.setState(st => (
      {
        isFinish: Object.values(this.state.scores).every(x=> x!== undefined)
      }
    ))
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    // Condition to prevent toggling when left rolls are 0
    if(this.state.rollsLeft >0) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
   }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.animateRoll();
  }

  componentDidUpdate() {
    this.calcScore();
  }

  calcScore() {
    // Calculate the current Score
    const currScore = Object.values(this.state.scores).filter(x => x !==undefined).reduce((prev,curr) => prev + curr, 0);
    // The check to prevent 
    if(currScore !== this.state.totalScore) this.setState({totalScore: currScore});
  }

  playAgainHandler() {
    this.setState({
      dice: Array.from({ length: NUM_DICE }).map(d => d=Math.ceil(Math.random() * 6)),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      isFinish: false,
      totalScore: 0,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    });
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='Yahtzee-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
              <Button 
                buttonOnClick={this.animateRoll}
                disabled={this.state.rollsLeft < 1 || this.state.locked.every(x => x)} >
                {this.state.rollsLeft} Rolls Left
              </Button>
            </div>
          </section>
        </header>
        <ScoreTable 
          doScore={this.doScore} 
          scores={this.state.scores}
          description={this.props.description}
          calcScore={this.calcScore} />
        <h1>Score: {this.state.totalScore}</h1>
        <Modal showModal={this.state.isFinish}>
          <h1 className="">{`Your Final Score: ${this.state.totalScore}`}</h1>
          <Button buttonOnClick={this.playAgainHandler}>Play Again</Button>
        </Modal>
      </div>
    );
  }
}

export default Game;
