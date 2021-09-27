import React, { Component } from "react";
import './Counter.css'
import propTypes from 'prop-types'
class CounterButton extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    handleIncrement=()=>{
        this.setState({counter:this.state.counter+this.props.by})
        this.props.increment(this.props.by);
    }
    handleDecrement=()=>{
        this.setState({counter:this.state.counter-this.props.by})
        this.props.decrement(this.props.by);
    }
    render(){
        return(
            <div className='Counter'>
                <button className='counter' onClick={this.handleIncrement}>+{this.props.by}</button>
                <button className='counter' onClick={this.handleDecrement}>-{this.props.by}</button>
                {/* <span className='count'>{this.state.counter}</span> */}
            </div>
        );
    }
}
CounterButton.defaultProps={
    by:1
}
CounterButton.propTypes={
    by:propTypes.number
}
export default CounterButton;