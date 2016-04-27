"use strict";
var React = require('react');
var Statistics = require('../components/Statistics.js')
import {getWpm, getAccuracy, getElapsedTime} from "../reducers"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	var remoteState = state.remote.state
	return {
		wpm: getWpm(remoteState),
		accuracy: getAccuracy(remoteState),
		time: getElapsedTime(remoteState)
	};
}

export default connect(mapStateToProps)(Statistics)