import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.counter = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.counter);
  }

  timer() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return <h2>You have spent {this.state.value} seconds on this website.</h2>;
  }
}
