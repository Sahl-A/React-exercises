import React from 'react';
import Die from './Die';

const Dice = (props) => {

    return(
        <div className="Dice">
            <Die dieNo={props.die1No} rolling={props.rolling}/>
            <Die dieNo={props.die2No} rolling={props.rolling}/>
        </div>
    )
}

export default Dice;