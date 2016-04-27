"use strict";

var React = require('react');
import SpeedTyperContainer from "../containers/SpeedTyperContainer";

var SpeedTyperGame;

module.exports = SpeedTyperGame = React.createClass({
	render: function() {
		return(
			<div className="speedTyperGameContainer">
				<SpeedTyperContainer />
			</div>
		);
	}
});