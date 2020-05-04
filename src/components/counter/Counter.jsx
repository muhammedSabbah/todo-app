import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './counter.css';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return(
      <div className="counter">
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment = (value) => {
    this.setState({
      counter: this.state.counter + value
    });
  }

  decrement = (value) => {
    if(this.state.counter - value >= 0) {
      this.setState({
        counter: this.state.counter - value
      });
    }
  }
}

class CounterButton extends Component {
  // Arrow Function
  render = () => {
    return (
      <div className="counterButton">
        <button onClick= { this.increment }>+ {this.props.by}</button>
        <button onClick= { this.decrement }>- {this.props.by}</button>
      </div>
    );
  }

  increment = () => {
   this.props.incrementMethod(this.props.by);
   console.log('increment');
  }

  decrement = () => {
    this.props.decrementMethod(this.props.by);
    console.log('decrement');
  }

}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.prototypes = {
  by : PropTypes.number
}

export default Counter;