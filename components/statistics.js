"use strict";

var React = require('react');
var Statistics;

module.exports = Statistics = React.createClass ({
	propTypes: {
		accuracy: React.PropTypes.number.isRequired,
		wpm: React.PropTypes.number.isRequired,
		time: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			<div className="statistics">
				<div className="SpeedTyperStatistics">
					Words per Minute: {this.props.wpm}
				</div>
				<div className="SpeedTyperStatistics">
					Accuracy: {this.props.accuracy}%
				</div>
				<div className="SpeedTyperStatistics"> 
					Time: {this.props.time}s
				</div>
			</div>
		);
	}

});
