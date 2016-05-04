import React from "react";

var KeyPressListener;

module.exports = KeyPressListener = React.createClass({
  propTypes: {
    gameStarted: React.PropTypes.bool.isRequired,
    handleKeyPress: React.PropTypes.func.isRequired
  },
  manageListener() {
    if (this.props.gameStarted)
      this.addListener();
    else
      this.removeListener();
  },
  addListener() {
    window.addEventListener('keypress', this.handleKeyPress)
  },
  removeListener() {
    window.removeEventListener('keypress', this.handleKeyPress)
  },
  handleKeyPress(event){
    const charString = String.fromCharCode(event.keyCode)
    this.props.handleKeyPress(charString)
  },
  render(){
    this.manageListener();
    return <span />;
  }
})

