"use strict";
var React = require('react');
var Statistics = require('../components/Statistics.js')
import {getWpm, getAccuracy, getElapsedTime} from "../reducers"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
	return {
		wpm: getWpm(state),
		accuracy: getAccuracy(state),
		time: getElapsedTime(state)
	};
}

export default connect(mapStateToProps)(Statistics)