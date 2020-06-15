import React from 'react';
import './Vote.css';

const Vote = (props) => {

    return(
        <div className="Vote">
            <i onClick={props.onVoteUpClick} className="fa fa-arrow-up"></i>
            <div 
                className="Vote__circle"
                style={{borderColor: `${props.circleColor}`}} >
                    {props.votsNo}
            </div>
            <i onClick={props.onVoteDownClick} className="fa fa-arrow-down"></i>
        </div>
    )
}

export default Vote;