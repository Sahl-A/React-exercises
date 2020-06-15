import React, { Component } from 'react';
import axios from 'axios';
import './DadJokes.css';
import Sidebar from '../Sidebar/Sidebar';
import JokesBoard from '../JokesBoard/JokesBoard';
import Spinner from '../UI/Spinner/Spinner';

const JOKES_API = 'https://icanhazdadjoke.com/';

class DadJokes extends Component {
    static defaultProps = {
        jokesNumber: 10,
    }

    state = {
        jokes: [
            /* {joke: 'test', id: 'asdgag'},
            {joke: 'test2', id: 'werwer'}, */
        ]
    }

    // fetch a single joke
    getAJoke = async (url) => {
        const res = await axios.get(url, {headers: {Accept: 'application/json'}})
        return res.data;
    }

    async componentDidMount() {
        // Get concurrent jokes
        const jokesRes = Array(this.props.jokesNumber).fill(1).map(_=> this.getAJoke(JOKES_API))
        const jokesData = await Promise.all(jokesRes)
        this.setState({jokes: [...jokesData]})
    }

    // Event Handlers
    getNewJokeHandler = async _ => {
        let newJoke =  await this.getAJoke(JOKES_API);
        const currJokesIds = this.state.jokes.map(joke => joke.id);
        // if the joke is duplicate, fetch a new one
        while(currJokesIds.some(joke => joke === newJoke.id)) {
            newJoke =  await this.getAJoke(JOKES_API);
        }
        this.setState(st => ({
            jokes: [newJoke, ...st.jokes]
        }))
    }

    render() {
        const displayJoke = this.state.jokes.length===0 ?   
            <Spinner /> 
            : 
            <JokesBoard 
                    jokesNo={this.props.jokesNumber}
                    jokesData={this.state.jokes} />

        return(
            <section className="DadJokes">
                <Sidebar btnOnClick={this.getNewJokeHandler}/>
                {displayJoke}
            </section>
        )
    }
}


export default DadJokes;