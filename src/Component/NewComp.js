import React, { Component } from 'react'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fullName:"inesch",
         bio:"im ines",
         imgSrc:"femme",
         profession:"engineer",
         bool:"true"
      }
    }

    styles={
        fontSyle:"italic",
        color:"purple",
        textAlign:"center"
      };

      Buttonchange=()=>{
        this.setState({
            bool:"false",
            fullName:"",
            bio:"",
            imgSrc:"",
            profession:""


        })
      }
    
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.fullName}</h3>
        <h3 style={this.styles}>{this.state.bio}</h3>
        <h3 style={this.styles}>{this.state.imgSrc}</h3>
        <h3 style={this.styles}>{this.state.profession}</h3>
        <h3 style={this.styles}>{this.state.bool}</h3>
        <button onClick={this.Buttonchange}>ok</button>

        
      </div>
    )
  }
}

export default NewComp
