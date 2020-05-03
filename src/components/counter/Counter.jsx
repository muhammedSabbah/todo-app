import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0
    }

    //this.increment = this.increment.bind(this);
    //this.decrement = this.decrement.bind(this);

  }
  // Arrow Function
  render = () => {
    return (
      <div className="counter">
        <button onClick= { this.increment }>+1</button>
        <span className="count">{ this.state.counter }</span>
        <button onClick= { this.decrement }>-1</button>
      </div>
    );
  }

  increment = () => {
    this.setState({
     counter: this.state.counter + 1
   });
   console.log('increment');
  }

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
   console.log('decrement');
  }

}

export default Counter;