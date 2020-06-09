import React from 'react';
import './Board.css'
import Cell from '../Cell/Cell';

const Board = (props) => {

    const board = (
            <tbody>
                {
                    props.cellProperites.map((_,i) => (
                        <tr id={i} key={i}>
                            {props.cellProperites[i].map((col,j) => (
                                <Cell 
                                    id ={[i,j]} 
                                    key={[i,j]}
                                    cellClick={()=> props.cellClick([i,j])}
                                    cellLit={col} />
                            ))}
                        </tr>
                    ))
                }
            </tbody>
    );
    return(
        <table className="Board">
            {board}
        </table>
    )
}

export default Board;