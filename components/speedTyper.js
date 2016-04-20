"use strict";

var React = require('react');
import InputContainer from "../containers/inputContainer";
import WordsContainer from "../containers/wordsContainer";
import StatisticsContainer from "../containers/statisticsContainer";
var SpeedTyper;

module.exports = SpeedTyper = React.createClass({
	render: function() {
		return(
			<div className="speedTyper">
				<WordsContainer />
				<InputContainer />
				<StatisticsContainer />
			</div>	
		);
	}
});