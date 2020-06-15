import React from 'react';
import Emojii from '../UI/Emojii/Emojii';
import './Sidebar.css'

const Sidebar = (props) => {

    return(
        <div className="Sidebar">
            <h1><strong>Dad</strong> Jokes</h1>
            <Emojii 
                type="fas fa-grin-tears"
                size="fa-5x" 
                />
            <button onClick={props.btnOnClick}>get a new Joke</button>
        </div>
    )
}

export default Sidebar;