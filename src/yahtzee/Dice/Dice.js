import React, { Component } from 'react';
import Die from '../Die/Die';
import './Dice.css';

class Dice extends Component {
  render() {
    const {handleClick, locked, rolling, dice} = this.props;
    return (
      <div className="Dice">
        {dice.map((d, idx) =>
          <Die handleClick={handleClick}
            val={d}
            locked={locked[idx]}
            idx={idx}
            rolling={rolling && !locked[idx]}
            key={idx} />
        )}
    </div>
    );
  }
}

export default Dice;