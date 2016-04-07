"use strict";
var React = require('react');
var SpeedTyperStatistics;

module.exports = SpeedTyperStatistics = React.createClass({
	propTypes: {
		time: React.PropTypes.number.isRequired,
		writtenWords: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	},
	getWpm: function() {
		var wpm = 0;
		if (this.props.time != 0) {
			var date = new Date();
			var currentTime = date.getTime();
			var timeDifference = (currentTime - this.props.time) / 1000; //in s
			var wps = this.props.writtenWords.length/timeDifference; // words per second
			var wpm = Math.round(wps * 60); // words per minute	
		}
		return (wpm);
	},
	getAccuracy: function() {
		var correctWords = 0;
		var wordCount = 0;
		for (var i = 0; i < this.props.writtenWords.length; i++) {
			if (i < this.props.words.length) {
				if (this.props.writtenWords[i] == this.props.words[i]) correctWords++;
			}
			wordCount++;
		}
		var accuracy = (wordCount > 0) ? (Math.round((correctWords/wordCount)*100)): 0;
		return accuracy;
	},
	render: function() {
		var wpm = this.getWpm();
		var accuracy = this.getAccuracy();
		return (
			<div>
				<div className="SpeedTyperStatistics">
					Words per Minute: {wpm}
				</div>
				<div className="SpeedTyperStatistics">
					Accuracy: {accuracy}%
				</div>
			</div>	
		);
	}
});