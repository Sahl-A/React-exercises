import React, { Component } from 'react';
import Dice from './Dice';
import './btn.css';

class RollDice extends Component {

    state = {
        die1: Math.floor(Math.random() * 6 + 1),
        die2: Math.floor(Math.random() * 6 + 1),
        rolling: false,
    }

    rollDiceHandler = () => {
        this.setState({rolling: true});
        setTimeout(() => {
            this.setState({
                die1: Math.floor(Math.random() * 6 + 1),
                die2: Math.floor(Math.random() * 6 + 1),
                rolling: false,
            });
        }, 1000);
    }

    render() {

        return(
            <div className="RollDice">
                <Dice 
                    die1No={this.state.die1}
                    die2No={this.state.die2}
                    rolling={this.state.rolling} />

                <button 
                    className="btn"
                    onClick={this.rollDiceHandler}
                    disabled={this.state.rolling} >
                        Roll Dice
                </button>
            </div>
        )
    }
}

export default RollDice;