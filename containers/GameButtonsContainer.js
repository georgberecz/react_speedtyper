"use strict";
var React = require('react');
var GameButtons = require('../components/GameButtons.js')

import { startGame, stopGame } from '../actions';
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		gameStarted: state.gameStarted,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGameStartClick: () => dispatch(startGame()),
    	onGameStopClick: () => dispatch(stopGame())
  	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameButtons);