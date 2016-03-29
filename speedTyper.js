"use strict";
var React = require('react');
var SpeedTyper;
var SpeedTyperWords = require("./speedTyperWords");
var SpeedTyperInput = require("./speedTyperInput");
var SpeedTyperStatistics = require("./speedTyperStatistics");

module.exports = SpeedTyper = React.createClass({
	render: function() {
		var wpm = 72;
		var accuracy = 4;
		var words = ["Tree", "Apple", "Onomatopoeia", "Car"];
		return (
			<div className="speedTyper">
				<SpeedTyperWords words={words} />
				<SpeedTyperInput />
				<SpeedTyperStatistics wpm={wpm} accuracy={accuracy} />
			</div>	
		);
	}
});
