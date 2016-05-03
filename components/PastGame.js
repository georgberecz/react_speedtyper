"use strict"

var React = require('react');
var PastGame;

module.exports = PastGame = React.createClass({
	propTypes: {
		accuracy: React.PropTypes.number.isRequired,
		wpm: React.PropTypes.number.isRequired,
		time: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			<div className="pastGame">
				Accuracy:{this.props.accuracy}% WPM:{this.props.wpm} Time:{this.props.time}s
			</div>
		);
	}

})