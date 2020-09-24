import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      temp:0
    }
    
  }
   
  
  plus=()=>{
    this.state.temp = this.state.temp + 1
    this.setState({temp:this.state.temp})
    }
  minus=()=>{
    this.setState(prevState=>{return {temp:prevState.temp-1 }})
    }
  reset=()=>{
    this.setState({temp:0 })
    }
   
    render(){
    const {temp}=this.state
    return(
       <div style={{marginLeft:"40%"}}>
          <h1 style={{marginLeft:"4%"}}>{temp}</h1>
          <button onClick={this.plus}>Increase</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.minus}>Decrease</button> 
       </div>
     )
   }
 }

export default App;
