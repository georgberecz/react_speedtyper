"use strict";

var React = require('react');
var Highscore;

module.exports = Highscore = React.createClass ({
	propTypes: {
		bestAccuracy: React.PropTypes.number.isRequired,
		bestWps: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			<div className="highscore">
				<div className="SpeedTyperHighscore">
					Best WPM: {this.props.bestWps}
				</div>
				<div className="SpeedTyperStatistics">
					Best Accuracy: {this.props.bestAccuracy}%
				</div>
			</div>
		);
	}

});