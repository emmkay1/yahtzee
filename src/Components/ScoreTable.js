import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "../Styles/ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore, rolling } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                doScore={(evt) => doScore("threes", threes.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
                rolling={rolling}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
                rolling={rolling}
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
                rolling={rolling}
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
                rolling={rolling}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
                rolling={rolling}
              />
            </tbody>
          </table>
        </section>
        <h2>
          TOTAL SCORE:
          {" " +
            Object.values(scores)
              .filter((x) => x !== undefined)
              .reduce((acc, cur) => acc + cur, 0)}
        </h2>
      </div>
    );
  }
}

export default ScoreTable;
