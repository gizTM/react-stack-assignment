import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleAddCounter = this.handleAddCounter.bind(this)
    this.handleMinusCounter = this.handleMinusCounter.bind(this)
  }

  handleAddCounter = (event) => {
    this.setState(prevState => { return prevState.count++ })
  }
  handleMinusCounter = (event) => {
    this.setState(prevState => { return prevState.count-- })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleMinusCounter}>-</button>
        <button onClick={this.handleAddCounter}>+</button>
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
