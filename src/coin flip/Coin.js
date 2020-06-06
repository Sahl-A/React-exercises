import React from 'react';

const Coin = (props) => {

    return(
        <h1>{props.head? 'HEAD' : 'TAIL'}</h1>
    )
}

export default Coin;