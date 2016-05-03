import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import SpeedTyperGame from './components/SpeedTyperGame'
import AppWrapper from './components/AppWrapper'
import About from "./components/About";
import PastGamesContainer from "./containers/PastGamesContainer";

export default (history) => (_) => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={SpeedTyperGame} />
        <Route path="/play" component={SpeedTyperGame} />
        <Route path="/pastGames" component={PastGamesContainer} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  )
}
