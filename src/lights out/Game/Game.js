import React, { Component } from 'react';
import './Game.css';
import Board from '../Board/Board';
import Button from '../Button/Button';
import Levels from '../Levels/Levels';

class Game extends Component {
    /* static defaultProps = {
        gameLevel: {rows: 5, cols: 5},
    }; */

    createArr = (rows,cols) => {
        return (
            Array(rows).fill(1).map(item => {
                return (
                    Array(cols).fill(1).map(item => {
                        return (
                            Math.round(Math.random())
                        );
                    })
                );
            })
        );
    }

    state = {
        gameLevel: {rows: 5, cols: 5},
        cellProperites: function(self) {
            return self.createArr(this.gameLevel.rows, this.gameLevel.cols)
        },
        moves: 0,
        hasWon: false,
    };

    // Event Handlers
    
    cellClickHandler = (id) => {
        console.log(id)
        const [x, y] = id;
        const cellProp = [...this.state.cellProperites(this)];
        // flip the cell
        cellProp[x][y] = !cellProp[x][y];
        // flip the adjacent cells. The conditions below to prevent the error when clicking on edge cells
        if(cellProp[x+1] !== undefined) cellProp[x + 1 ][y] = !cellProp[x + 1][y];
        if(cellProp[x-1] !== undefined) cellProp[x - 1 ][y] = !cellProp[x - 1][y];
        if(cellProp[x][y+1] !== undefined) cellProp[x][y + 1] = !cellProp[x][y + 1];
        if(cellProp[x][y-1] !== undefined) cellProp[x][y - 1] = !cellProp[x][y - 1];
        
        // this.setState({cellProperites: function(){return cellProp}})
        this.setState(curState => (
            {
                cellProperites: function(){return cellProp},
                moves: curState.moves + 1,
            }
        ))
        //  check won or not
        this.checkWon();
    }

    // PlayAgain handler
    playAgainHandler = () => {
        this.setState({
            gameLevel: {...this.state.gameLevel},
            cellProperites: function(self) {
                return self.createArr(this.gameLevel.rows, this.gameLevel.cols)
            },
            moves: 0,
            hasWon: false,
        })
    }

    easyLevelHandler = () => {
        // the below was to test changing the data immutably. However, it works fine in the 2 below handlers
        const newLevel = {...this.state.gameLevel};
        newLevel.rows = 3;
        newLevel.cols = 3;
        this.setState({
            gameLevel: newLevel,
            cellProperites: function(self) {
                return self.createArr(this.gameLevel.rows, this.gameLevel.cols)
            },
            moves: 0
        })

    }

    meduimLevelHandler = () => {
        this.setState({
            gameLevel: {rows: 5, cols: 5},
            cellProperites: function(self) {
                return self.createArr(this.gameLevel.rows, this.gameLevel.cols)
            },
            moves: 0
        })
    }

    hardLevelHandler = () => {
        this.setState({
            gameLevel: {rows: 7, cols: 7},
            cellProperites: function(self) {
                return self.createArr(this.gameLevel.rows, this.gameLevel.cols)
            },
            moves: 0
        })
    }

    // Check if all cells are lit or not
    checkWon = () => {
        const won = this.state.cellProperites(this).flat().filter(item => item)
        if(won.length === 0) this.setState({hasWon: true});
    }


    render() {
        let game = this.state.hasWon ?
                         (
                            <React.Fragment>
                                <h1>You made it!!</h1>
                                <Button onClick={this.playAgainHandler}>Play Again</Button>
                                {/* <button onClick={this.playAgainHandler}>Play Again</button> */}
                            </React.Fragment>
                         ): 
                         (
                            <Board 
                                gameLevel={this.state.gameLevel}
                                cellClick={this.cellClickHandler}
                                cellProperites={this.state.cellProperites(this)} />
                         )

        return(
            <div className="Game">
                <Levels 
                    onClickEasy={this.easyLevelHandler}
                    onClickMeduim={this.meduimLevelHandler}
                    onClickHard={this.hardLevelHandler} />
                {game}
                <p>Moves: {this.state.moves}</p>
            </div>
        )
    }
}

export default Game;