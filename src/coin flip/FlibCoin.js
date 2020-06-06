import React, { Component } from 'react';
import Coin from './Coin';

class FlibCoin extends Component {

    state = {
        count: 0,
        face: 0,
        headCount: 0,
        tailCount: 0,
    }

    flibCoinHandler = () => {
        const headChange = Math.floor(Math.random() * 2);
        // Count the number of flibs
        this.setState(curState => (
            {
                count: curState.count +1,
                face: headChange,
                headCount: curState.face? curState.headCount+1: curState.headCount,
                tailCount: !curState.face? curState.tailCount+1: curState.tailCount,
            }
        ));


    }

    render() {

        return(
            <div>
                <Coin head={this.state.face}/>
                <button onClick={this.flibCoinHandler}>Flib the Coin</button>
                <p>
                    Total Flibs are {this.state.count}. Heads are {this.state.headCount}, tails are {this.state.tailCount}
                </p>
            </div>
        )
    }
}

export default FlibCoin;