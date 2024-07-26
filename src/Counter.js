import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    const { count, onClickAdd, onClickSubtract } = this.props;

    return (
      <div className="counter">
        <h2>Count: {count}</h2>
        <button className="button" onClick={onClickAdd}>+</button>
        <button className="button" onClick={onClickSubtract}>-</button>
      </div>
    );
  }
}

export default Counter;
