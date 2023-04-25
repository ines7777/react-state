import React, { Component } from 'react';
import NewComp from './Component/NewComp';

 class App extends Component {
  styles={
    fontSyle:"bold",
    color:"teal",
    textAlign:"center"
  };
  render() {
    return (
      <div className='App'> 
        <h1 style={this.styles}>welcome</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;
