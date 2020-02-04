import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: "Item",
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imgUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: "50px",
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imgUrl} alt=""></img>
        {/* Conditional Render */}
        {this.state.tags.length === 0 && (
          <span style={this.styles}>"Please create a new tag"</span>
        )}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  //You HAVE TO bind the handlers ALWAYS.
  // if you use arrow functions is already binded
  //++ does NOT work
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("incrementing...", this.state.count);
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//or
//export default class Counter...
