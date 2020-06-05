import React from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
    const cards = props.pokemon.map(p => {
        return (
            <Pokecard 
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.exp} />
        )
    })

    return(
        <div className="Pokedex">
            {cards}
        </div>
    )
}

Pokedex.defaultProps = {
    pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', exp: 62},
        {id: 7, name: 'Squirtle', type: 'water', exp: 63},
        {id: 11, name: 'Metapod', type: 'bug', exp: 72},
        {id: 12, name: 'Butterfree', type: 'flying', exp: 178},
        {id: 25, name: 'Pikachu', type: 'electric', exp: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', exp: 95},
        {id: 94, name: 'Gengar', type: 'poison', exp: 225},
        {id: 133, name: 'Eevee', type: 'normal', exp: 65},
    ]
}


export default Pokedex;