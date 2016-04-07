"use strict";
var React = require('react');
var SpeedTyper;
var SpeedTyperWords = require("./speedTyperWords");
var SpeedTyperInput = require("./speedTyperInput");
var SpeedTyperStatistics = require("./speedTyperStatistics");

module.exports = SpeedTyper = React.createClass({
	getInitialState: function() {
		return {text: '', currentCharacterIndex: 0, currentWordIndex:0, writtenWords:[], timerStarted: false, time:0};
	},
	handleInputChange: function(text){
		var timerStarted = this.state.timerStarted;
		var time = this.state.time;
		var currentCharacterIndex = text.length-1;
		var currentWordIndex = this.state.currentWordIndex;
		var writtenWords = this.state.writtenWords;
		var input = text.text;
		if (!(timerStarted)) {
			timerStarted = true;
			var date = new Date();
			time = date.getTime();
		}
		if (input.substr(input.length-1) == " ") {
			currentWordIndex++;
			currentCharacterIndex = 0;
			writtenWords.push(input.trim());
			input = "";
		}
		this.setState({text: input, 
			currentCharacterIndex: currentCharacterIndex, 
			currentWordIndex: currentWordIndex, 
			writtenWords: writtenWords,
			timerStarted: timerStarted,
			time: time}
		);
	},
	render: function() {
		var wpm = 72;
		var accuracy = 4;
		var words = ["tree", "apple", "onomatopoeia", "car", "world", "love"];
		return (
			<div className="speedTyper">
				<SpeedTyperWords 	
					words={words} 
					writtenWords={this.state.writtenWords}
					currentText={this.state.text}
					currentWordIndex={this.state.currentWordIndex} 
					currentCharacterIndex={this.state.currentCharacterIndex} 
				/>
				<SpeedTyperInput onInputChange={this.handleInputChange}/>
				<SpeedTyperStatistics 
					time={this.state.time}
					writtenWords={this.state.writtenWords}
					words={words}
				/>
			</div>	
		);
	}
});
