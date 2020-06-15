import React from 'react';
import './Emojii.css';

const Emojii = (props) => {
    const classes = `${props.type} ${props.size} Emojii`;
    return(
        <i className={classes}></i>
    )
}

export default Emojii;