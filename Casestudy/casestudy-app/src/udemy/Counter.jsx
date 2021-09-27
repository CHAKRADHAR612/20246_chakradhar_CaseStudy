import React, { Component } from "react";
import CounterButton from "./CounterButton";
class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    render(){
        return (
            <div className="counter1">
              <CounterButton by={1} increment={this.increment} decrement={this.decrement}/>
              <CounterButton by={5} increment={this.increment} decrement={this.decrement}/>
              <CounterButton by={10} increment={this.increment} decrement={this.decrement}/>
              <span className='count'>{this.state.counter}</span><br/>
              <button onClick={this.handleReset} style={{backgroundColor:'red',color:'white',padding:'15px'}}>Reset</button>
            </div>
          );
    }
    handleReset=()=>{
        this.setState(
            ()=>{
                return{counter:0}
            }
            )
    }
    increment=(by)=>{
        console.log(`increment from the parent method ${by}`)
        this.setState((prevState)=>{return {counter:prevState.counter+by}})
    }    
    decrement=(by)=>{
        console.log(`decrement from the parent method ${by}`)
        this.setState((prevState)=>{return {counter:prevState.counter-by}})
    }
}

export default Counter;