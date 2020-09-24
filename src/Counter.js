import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} style={{ marginLeft: 10 + "px" }}>
          -
        </button>
        <h1>{this.state.count}</h1>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;
