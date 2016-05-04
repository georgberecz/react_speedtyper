import React from "react";
import KeyPressListener from './KeyPressListener'

const GlobalKeys = (props) => {
  return (
    <div>
      <KeyPressListener 
      	handleKeyPress={props.handleKeyPress} 
      	gameStarted={props.gameStarted} 
      />
    </div>
  )
}

export default GlobalKeys;