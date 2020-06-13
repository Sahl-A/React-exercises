import React, { Component } from 'react';
import RuleRow from '../RuleRow/RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from '../Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore, description, calcScore } = this.props;
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow calcScore={()=>calcScore()} description={description[0]} name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[1]} name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[2]} name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[3]} name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[4]} name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[5]} name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0"> 
            <tbody>
              <RuleRow calcScore={()=>calcScore()} description={description[6]} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[7]} name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[8]} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[9]} name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[10]} name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[11]} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow calcScore={()=>calcScore()} description={description[12]} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;