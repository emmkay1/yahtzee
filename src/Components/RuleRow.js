import React, { Component } from "react";
import "../Styles/RuleRow.css";

class RuleRow extends Component {
  static defaultProps = {
    descriptions: {
      Ones: "1 point per 1",
      Twos: "2 points per 2",
      Threes: "3 points per 3",
      Fours: "4 points per 4",
      Fives: "5 points per 5",
      Sixes: "6 points per 6",
      "Three of Kind": "Sum all dice if 3 are the same",
      "Four of Kind": "Sum all dice if 4 are the same",
      "Full House": "25 points for a full house",
      "Small Straight": "30 points for a small straight",
      "Large Straight": "40 points for a large straight",
      Yahtzee: "50 points for yahtzee",
      Chance: "Sum of all dice"
    }
  };
  render() {
    const { score, doScore, name, rolling } = this.props;
    const disabled = score !== undefined;
    const description = this.props.descriptions;
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"} ${
          rolling && "Rolling-disabled"
        }`}
        onClick={disabled ? undefined : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">
          {disabled ? score : description[this.props.name]}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
