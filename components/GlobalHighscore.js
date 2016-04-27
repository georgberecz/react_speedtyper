"use strict";

var React = require('react');
var GlobalHighscore;

module.exports = GlobalHighscore = React.createClass ({
	propTypes: {
		globalBestWpm: React.PropTypes.number.isRequired
	},
	render: function() {
		return(
			<div className="globalHighscore">
				<div className="SpeedTyperHighscore">
					Best WPM across all sessions: {this.props.globalBestWpm}
				</div>
			</div>
		);
	}
});