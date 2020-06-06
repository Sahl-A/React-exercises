import React from 'react';
import './Die.css';

const Die = (props) => {
    // Change the received number to letter
    const converNoToLetters = () => {
        switch (props.dieNo) {
            case 1:
                return 'fa-dice-one';
            case 2:
                return 'fa-dice-two';
            case 3:
                return 'fa-dice-three';
            case 4:
                return 'fa-dice-four';
            case 5:
                return 'fa-dice-five';
            case 6:
                return 'fa-dice-six';
            default:
                break;
        }
    }

    // Add the shake class when it is rolling
    const rollingClass = props.rolling ? 'shake-horizontal' : null;

    return(
        <i className={`${rollingClass} Die fas ${converNoToLetters()}`}></i>
    )
}

export default Die;