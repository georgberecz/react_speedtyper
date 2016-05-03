import React from "react";
import { Link } from 'react-router';

const LinkToGame = (_) => <Link to="/play">Game</Link>
const LinkToPastGames = (_) => <Link to="/pastGames">Past Games</Link>
const LinkToAbout = (_) => <Link to="/about">About</Link>

export default (props) => {
  return(
    <div className="speedTyperApp">
      <h1>SpeedTyper App</h1>
      <div> <LinkToGame/> </div>
      <div> <LinkToPastGames/> </div>
      <div> <LinkToAbout/> </div>
      {props.children}
    </div>
  )
}