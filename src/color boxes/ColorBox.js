import React from 'react';
import './ColorBox.css';

const ColorBox = (props) => {
    return(
        <div 
            className="ColorBox" 
            style={{backgroundColor: props.color}}
            onClick={()=> props.clickHandler(props.id)} >
        </div>
    )
}

export default ColorBox;