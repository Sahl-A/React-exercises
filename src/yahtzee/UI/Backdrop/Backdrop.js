import React from 'react';
import './Backdrop.css'

const Backdrop = (props) => {

    return(
        props.isBackdropShown ? 
            <div 
                className="Backdrop"
                onClick={props.backdropClick} >
            </div>: null
    )
}

export default Backdrop;