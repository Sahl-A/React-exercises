import React from 'react';
import './Levels.css';
import Button from '../Button/Button';

const Levels = (props) => {

    return(
        <div className="Levels">
            <Button onClick={props.onClickEasy}>Easy</Button>
            <Button onClick={props.onClickMeduim}>Meduim</Button>
            <Button onClick={props.onClickHard}>Hard</Button>
        </div>
    )
}

export default Levels;