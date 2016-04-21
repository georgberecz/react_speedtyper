"use strict";
var React = require('react');
var GameButtons = require('../components/GameButtons.js')

import { startGame, stopGame, wordsFetchRequested, fetchPost } from '../actions';
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	var wordsFetched = (state.game.words.length > 0)
	return {
		gameStarted: state.game.gameStarted,
		fetchInProgress: state.fetch.inProgress,
		wordsFetched: wordsFetched
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGameStartClick: () => dispatch(startGame()),
    	onGameStopClick: () => dispatch(stopGame()),
    	onFetchWordsClick: () => {
    		dispatch(wordsFetchRequested())
      		dispatch(fetchPost())
    	}
  	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameButtons);