"use strict"

var React = require('react');
var PastGames = require("../components/PastGames");

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	var pastGames = state.game.pastGames == undefined ? [] : state.game.pastGames;
	return {
		pastGames: pastGames
	};
}

export default connect(mapStateToProps)(PastGames);