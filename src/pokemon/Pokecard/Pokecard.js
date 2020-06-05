import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    // Low quality images
    // const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const padToThree = (number) => number <=999 ? `00${number}`.slice(-3) : number;

    return(
        <div className="Pokecard">
            <h3>{props.name}</h3>
            <img src={`${POKE_API}${padToThree(props.id)}.png`} alt={props.name}/>
            <div>{props.type}</div>
            <div>{props.exp}</div>
        </div>
    )
}

export default Pokecard;