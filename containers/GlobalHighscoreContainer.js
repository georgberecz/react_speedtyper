"use strict"

var React = require('react')
var GlobalHighscore = require('../Components/GlobalHighscore')

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	var globalBestWpm = state.game.bestWpm > state.remote.state.bestWpm ? 
							state.game.bestWpm : state.remote.state.bestWpm
	return {
		globalBestWpm: globalBestWpm
	}
};

export default connect(mapStateToProps)(GlobalHighscore);