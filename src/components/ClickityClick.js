// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    }, () =>
    console.log(this.state.hasBeenClicked)
  }

  //the empty function above console.log = This callback will fire once the state has been updated, ensuring that this.state is logged once the callback has been done.
 
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    })
  }
  
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
