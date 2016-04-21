"use strict";

var React = require('react');
import InputContainer from "../containers/InputContainer";
import WordsContainer from "../containers/WordsContainer";
import StatisticsContainer from "../containers/StatisticsContainer";
import GameButtonsContainer from "../containers/GameButtonsContainer";
import HighscoreContainer from "../containers/HighscoreContainer";

var SpeedTyper;

module.exports = SpeedTyper = React.createClass({
	render: function() {
		return(
			<div className="speedTyper">
				<WordsContainer />
				<InputContainer />
				<StatisticsContainer />
				<GameButtonsContainer />
				<HighscoreContainer />
			</div>	
		);
	}
});