import React, { Component } from "react";

class Dice extends Component {
  // this is a local state and is not desirable if I want to change
  state = {
    // dsize: this.props.size,
    // number: this.props.dice.value,
    visibility: "invisible"
  };

  render() {
    // console.log(this.props.size);
    var styles = {
      fontSize: this.props.size,
      lineHeight: 0,
      width: this.props.size,
      height: this.props.size
    };

    return (
      <div className="d-inline-block">
        <div
          className="position-relative"
          style={styles}
          onMouseEnter={this.fadeIn}
          onMouseLeave={this.fadeOut}
        >
          <span
            className={"position-absolute dice dice-" + this.getNumber()}
          ></span>
          <div
            style={{
              width: "100%"
            }}
            role="group"
            aria-label="..."
            className={
              "btn-group btn-group-sm " +
              this.state.visibility +
              " " +
              "position-absolute"
            }
          >
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onDecrement(this.props.dice)}
            >
              <span className="glyphicon">&#x2212;</span>
            </button>
            <button
              className="btn btn-primary "
              onClick={() => this.props.onIncrement(this.props.dice)}
            >
              <span className="glyphicon">&#x2b;</span>
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.dice.id)}
            >
              <span className="glyphicon">x</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  fadeIn = () => {
    this.setState({ visibility: "visible" });
  };
  fadeOut = () => {
    this.setState({ visibility: "invisible" });
  };
  handleDecrease = () => {
    this.changePreviousNumber();
  };
  handleDelete = () => {};
  handleClickDice = () => {
    this.changeRandomNumber();
  };
  getNumber() {
    let classes = "dice dice-";
    classes += this.props.dice.value;
    return classes;
  }
}

export default Dice;
