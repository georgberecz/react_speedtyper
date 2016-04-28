"use strict"

var React = require('react')
var Highscore = require('../Components/Highscore')

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		bestWpm: state.game.bestWpm,
		bestAccuracy: state.game.bestAccuracy
	}
};

export default connect(mapStateToProps)(Highscore);
