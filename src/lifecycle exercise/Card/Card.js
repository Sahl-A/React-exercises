import React from 'react';
import './Card.css';

const Card = (props) => {
    // transform: translate(10px, 20px) rotate(10deg);
    const randomDeg = Math.floor(Math.random() * 50);
    const randomXY = Math.floor(Math.random() * 10)
    console.log(`[Card inside Fn body]`)
    return(
        <img 
            className="Card" 
            src={props.imgSrc} 
            alt={props.alt}
            style={{transform: `rotate(${randomDeg}deg) translate(${randomXY}px, ${randomXY}px)`}} />
    )
}

export default Card;