import React, { Component } from 'react';
import ColorBox from './ColorBox';

class ColorsContainer extends Component {
    static defaultProps = {
        randomColor: () => {
            const color1 = Math.floor(Math.random() * 255);
            const color2 = Math.floor(Math.random() * 255);
            const color3 = Math.floor(Math.random() * 255);
            return `rgb(${color1}, ${color2}, ${color3})`;
        },
    };

    state = {
        colors: Array(18).fill(1).map(color => color=this.props.randomColor()),
    }

    clickHandler = (id) => {
        const newColors = [...this.state.colors];
        newColors[id] = this.props.randomColor();
        this.setState({colors: [...newColors]});
    }

    render() {
        return(
            <div>
                {this.state.colors.map((color, i) => (
                    <ColorBox 
                        key = {i}
                        id= {i}
                        color={color}
                        clickHandler={this.clickHandler} />
                ))}
            </div>
        )
    }
}

export default ColorsContainer;