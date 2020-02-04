import React, { Component } from "react";
import Dice from "./dice";

class Dices extends Component {
  state = {
    size: 100,
    counters: [0, 0, 0, 0, 0, 0],
    dices: []
  };
  render() {
    return (
      <div className="" style={{ lineHeight: 0 }}>
        {/* value and selected attributes are passed as props */}
        {/* props are read -only, and can not be changed */}
        {/* handleDeleteDice is being send as a prop to have access to this method */}
        {this.state.dices.map(dice => (
          <Dice
            key={dice.id}
            onDelete={this.handleDeleteDice}
            dice={dice}
            size={this.state.size}
            onIncrement={this.changeNextNumber}
            onDecrement={this.changePreviousNumber}
            onIncreaseSize={this.onIncreaseSize}
            onDecreaseSize={this.onDecreaseSize}
          />
        ))}
        <nav className="navbar fixed-bottom navbar-dark bg-dark d-flex flex-row">
          <span className="navbar-text mr-auto p-2">HOW RANDOM </span>
          <span className="navbar-text mr-auto p-2">
            {this.state.counters.map((value, index) => {
              return (
                <span key={index} className="badge badge-light m-1 p-2">
                  {"#" + (index + 1) + ": "}
                  {this.state.counters[index]}
                </span>
              );
            })}
          </span>
          <div className="btn-group" role="toolbar" aria-label="...">
            <button
              type="button"
              className="btn btn-secondary p-2 w-50"
              onClick={this.handleDecreaseSize}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-secondary p-2 w-50"
              onClick={this.handleIncreaseSize}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary m-1 p-2"
            onClick={this.handleAddDice}
          >
            Add +
          </button>
          <button
            type="button"
            className="btn btn-info m-1 p-2"
            onClick={this.handleRandom}
          >
            Random
          </button>
          <button
            type="button"
            className="btn btn-danger m-1 p-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </nav>
      </div>
    );
  }

  handleDecreaseSize = () => {
    if (this.state.size > 80) {
      this.setState({ size: (this.state.size -= 10) });
    }
  };
  handleIncreaseSize = () => {
    if (this.state.size < 300) {
      this.setState({ size: (this.state.size += 10) });
    }
  };
  changeNextNumber = dice => {
    const dices = [...this.state.dices];
    const index = dices.indexOf(dice);
    dices[index] = { ...dice };
    dices[index].value < 6 ? dices[index].value++ : (dices[index].value = 1);
    this.setState({ dices });
    this.getNumberRepetitions();
  };
  changePreviousNumber = dice => {
    const dices = [...this.state.dices];
    const index = dices.indexOf(dice);
    dices[index] = { ...dice };
    dices[index].value > 1 ? dices[index].value-- : (dices[index].value = 6);
    this.setState({ dices });
    this.getNumberRepetitions();
  };

  handleDeleteDice = diceid => {
    const dices = this.state.dices.filter(d => d.id !== diceid);
    this.setState({ dices });
    this.getNumberRepetitions();
  };

  handleAddDice = () => {
    let random = 1 + Math.floor(Math.random() * 6);
    let dices = this.state.dices;
    let idd = dices.length;
    dices.push({ id: idd + 1, value: random });
    this.setState({ dices: dices });
    this.getNumberRepetitions();
  };

  handleReset = () => {
    const dices = [];
    this.setState({ dices });
    this.getNumberRepetitions();
  };

  handleRandom = () => {
    const dices = this.state.dices.map(d => {
      d.value = 1 + Math.floor(Math.random() * 6);
      return d;
    });
    this.setState({ dices });
    this.getNumberRepetitions();
  };

  getTotalDices() {
    return this.state.dices.length;
  }
  getNumberRepetitions = () => {
    let counter = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.state.dices.length; i++) {
      const element = this.state.dices[i];
      if (element.value == 1) {
        counter[0] = counter[0] += 1;
      }
      if (element.value == 2) {
        counter[1] = counter[1] += 1;
      }
      if (element.value == 3) {
        counter[2] = counter[2] += 1;
      }
      if (element.value == 4) {
        counter[3] = counter[3] += 1;
      }
      if (element.value == 5) {
        counter[4] = counter[4] += 1;
      }
      if (element.value == 6) {
        counter[5] = counter[5] += 1;
      }
    }
    // console.log("counting...", counter);
    this.setState({ counters: counter });
  };
}

export default Dices;
