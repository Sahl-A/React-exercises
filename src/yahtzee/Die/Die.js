import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieLetters: ['one','two','three','four','five','six']
  };

  render() {
    const {val, handleClick, locked,idx, dieLetters, rolling} = this.props;
    let classes = `Die fas fa-dice-${dieLetters[val-1]} fa-4x `;
    if(locked) classes+='Die-locked ';
    if(rolling) classes+='rotate-center'
    return (
      <i
        className={classes}
        onClick={()=> handleClick(idx)} >
      </i>
    );
  }
}

export default Die;
