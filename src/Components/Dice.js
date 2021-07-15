import React, { Component } from "react";
import Die from "./Die";
import "../Styles/Dice.css";

class Dice extends Component {
  render() {
    const { dice, handleClick, locked, rollsLeft, rolling } = this.props;
    return (
      <div className="Dice">
        {dice.map((d, idx) => (
          <Die
            handleClick={handleClick}
            val={d}
            locked={locked[idx]}
            rollsLeft={rollsLeft}
            rolling={rolling}
            idx={idx}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
