import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  clickActions = () => {
    this.props.doScore();
    this.props.calcScore();
  }

  render() {
    const {description, name, score} = this.props;
    const disabled = score !== undefined;
    // console.log(`[RuleRow at ${description}] rendering....`)
    return (
      <tr 
        className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`} 
        onClick={disabled ? null : this.clickActions}>
          
          <td className="RuleRow-name">{name}</td>
          <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;