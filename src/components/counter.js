import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
      this.handleAddCounter = this.handleAddCounter.bind(this)
      this.handleMinusCounter = this.handleMinusCounter.bind(this)
    }
  
    handleAddCounter = (event) => {
      this.setState(prevState => { 
        return { count: prevState.count + 1 }
      })
    }
    handleMinusCounter = (event) => {
      this.setState(prevState => {       
        return {count: prevState.count - 1 }
      })
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

  export default Counter;