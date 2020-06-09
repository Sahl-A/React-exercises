import React from 'react';
import './Cell.css';

const Cell = (props) => {
    let classes = props.cellLit? "Cell lit" : "Cell dim";

    return(
        <td 
            className={classes}
            onClick={props.cellClick} >
        </td>
    )
}

export default Cell;