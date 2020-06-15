import React, { Component } from 'react';
import './Joke.css';
import Emojii from '../UI/Emojii/Emojii';
import Vote from '../Vote/Vote';

class Joke extends Component {
    state = {
        votes: 0
    }

    // Event handlers
    onVoteUpHandler = () => {
        this.setState(st => ({
            votes: st.votes + 1,
        }))
    }

    onVoteDownHnadler = () => {
        this.setState(st => ({
            votes: st.votes - 1,
        }))
    }

    // Set the circle color based on the votes
    setCircleColor = () => {
        return this.state.votes < 0 ? ['red','fa-angry'] 
                : this.state.votes === 0 ? ['black', 'fa-meh'] 
                : this.state.votes < 5 ? ['yellow', 'fa-smile-beam']
                : this.state.votes < 10 ? ['lightgreen', 'fa-grin-tears'] : ['lightgreen', 'fa-grin-tears']
    }

    render() {
        return(
            <li className="Joke">
                <React.Fragment>
                    <Vote 
                        onVoteUpClick={this.onVoteUpHandler}
                        onVoteDownClick={this.onVoteDownHnadler}
                        votsNo={this.state.votes}
                        circleColor={this.setCircleColor()[0]} />
                    <p className="Joke__message">{this.props.name}</p>
                    <Emojii 
                        type={`fas ${this.setCircleColor()[1]}`}
                        size="fa-2x" />
                </React.Fragment>
            </li>
        )

    }
}



export default Joke;