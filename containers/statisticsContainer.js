"use strict";
var React = require('react');
var Statistics = require('../components/Statistics.js')
import {getWpm, getAccuracy, getElapsedTime} from "../reducers"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		wpm: getWpm(state.game),
		accuracy: getAccuracy(state.game),
		time: getElapsedTime(state.game)
	};
}

export default connect(mapStateToProps)(Statistics)
