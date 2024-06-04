import React, { Component } from 'react'

interface CounterState {
    count : number ;
}

export default class Counter extends Component < {}, CounterState>{
    state = {
        count: 0
        }; increment = () => {
        this.setState({ count: this.state.count + 1 }); 
       }; 
       render() { 
    return (
      <div>
        <p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
      </div>
    )
  }
}
