import React, { Component } from 'react';

class StateClicker extends Component {
    state = {
        randomNo: Math.floor(Math.random() * 10)
    }

    randomNoHandler = () => {
        this.setState({randomNo: Math.floor(Math.random() * 10)})
    }
    render() {
        const output = this.state.randomNo === 7 ? 'YOU WIN!' : <button onClick={this.randomNoHandler} >Click Me</button>;

        return(
            <React.Fragment>
                <h2>Number is {this.state.randomNo}</h2>
                {output}
            </React.Fragment>
        )
    }
}

export default StateClicker;

