"use strict";
var React = require('react');
var SpeedTyperStatistics;

module.exports = SpeedTyperStatistics = React.createClass({
	propTypes: {
		wpm: React.PropTypes.number.isRequired,
		accuracy: React.PropTypes.number.isRequired,
	},
	render: function() {
		return (
			<div>
				<div className="SpeedTyperStatistics">
					Words per Minute: {this.props.wpm}
				</div>
				<div className="SpeedTyperStatistics">
					Accuracy: {this.props.accuracy}
				</div>
			</div>	
		);
	}
});