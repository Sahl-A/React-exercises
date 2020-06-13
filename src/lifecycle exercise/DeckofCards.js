import React, { Component } from 'react';
import axios from 'axios';
import './DeckofCards.css';
import Spinner from './Spinner/Spinner';
import Card from './Card/Card';

const BASE_URL = "http://deckofcardsapi.com/api/deck";

class DeckofCards extends Component {
    state = {
        deck: null,
        drawn: [],
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/new/shuffle/`)
            .then(response => this.setState({deck: response.data}))
    }

    giveCardsButtonHandler = () => {
        try {
            axios.get(`${BASE_URL}/${this.state.deck.deck_id}/draw`)
            .then(res => {
                const data = res.data
                const cardData = data.cards[0]
                if(!data.success) throw new Error('No card remaining') 
                return (
                    this.setState(st => ({
                        drawn: [
                            ...this.state.drawn,
                            {
                                id: cardData.code,
                                imgSRC: cardData.image,
                                name: `${cardData.value} of ${cardData.suit}`,
                            }
                        ],
                        imageLoading: false
                    }))
                )
            })
        } catch (error) {
            alert(error)
        }
        
    }
    render() {
        const cards = this.state.drawn.map(card => (
                        <Card 
                            key={card.id} 
                            imgSrc={card.imgSRC}
                            alt={card.name} />
        ));

        return(
            this.state.deck? 
            <div className="DeckofCards">
                <h1>Card Giver</h1>
                <p>A little demo with React</p>
                <button onClick={this.giveCardsButtonHandler}>Give me a card!</button>
                <div className="DeckofCards-cards">
                    {this.state.deck ? cards : null }
                </div>
            </div>
            : <Spinner />
        )
    }
}

export default DeckofCards;