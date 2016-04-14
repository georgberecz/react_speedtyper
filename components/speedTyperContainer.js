"use strict";
var React = require('react');
var SpeedTyperContainer;
var SpeedTyper = require("./speedTyper")
var WordsContainer = require("./wordsContainer");
var InputContainer = require("./inputContainer");
var StatisticsContainer = require("./statisticsContainer");

module.exports = SpeedTyperContainer = React.createClass({
	getInitialState: function() {
		return {text: '', writtenWords:[], timerStarted: false, time:0};
	},
	handleInputChange: function(text){
		var timerStarted = this.state.timerStarted;
		var time = this.state.time;
		var currentCharacterIndex = text.length-1;
		var writtenWords = this.state.writtenWords;
		var input = text;
		if (!(timerStarted)) {
			timerStarted = true;
			var date = new Date();
			time = date.getTime();
		}
		if (input.substr(input.length-1) == " ") {
			writtenWords.push(input.trim());
			input = "";
		}
		this.setState({text: input, 
			writtenWords: writtenWords,
			timerStarted: timerStarted,
			time: time}
		);
	},
	render: function() {
		var words = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
		return (
			<SpeedTyper 
				words={words} 
				writtenWords={this.state.writtenWords} 
				currentText={this.state.text} 
				time={this.state.time}
				handleInputChange={this.handleInputChange}
			/>	
		);
	}
});
