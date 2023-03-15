import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }

    handleReset=()=>{
        this.setState({count:0})
    }


  render() {
    return (
      <div className='mainblock'>
        <h1>{this.state.count}</h1>
        <div className='button' >
            <button id='bt1' onClick={this.handleIncrement}>+ Increment</button>
            <button id='bt2' onClick={this.handleDecrement}>- Decrement</button>
            <button id='bt3' onClick={this.handleReset}>Reset</button>
        </div>


      </div>
    )
  }
}
