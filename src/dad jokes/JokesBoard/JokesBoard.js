import React from 'react';
import './JokesBoard.css'
import Joke from '../Joke/Joke';

const JokesBoard = (props) => {

    return(
        <ul className="JokesBoard">
            {
                props.jokesData.map(joke => (
                        <Joke 
                        key={joke.id}
                        name={joke.joke} />
                ))
            }
        </ul>
    )
}

export default JokesBoard;