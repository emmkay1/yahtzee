import React, { Component } from "react";
import "../Styles/Die.css";

class Die extends Component {
  static defaultProps = {
    faces: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { rollsLeft, rolling, locked, val } = this.props;
    const face = this.props.faces[Math.floor(Math.random() * 6)];
    return (
      <i
        className={`fas fa-dice-${
          val === undefined ? face : this.props.faces[val - 1]
        } Die ${(locked || rolling) && "Die-locked"} ${
          rolling && !locked && "Die-rolling"
        }`}
        onClick={rollsLeft === 0 ? undefined : this.onToggle}
        disabled={rollsLeft === 0}
      />
    );
  }
}

export default Die;
