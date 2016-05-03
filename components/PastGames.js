"use strict"

var React = require('react');
var PastGame = require("./PastGame")

var PastGames;

module.exports = PastGames = React.createClass({
	propTypes: {
		pastGames: React.PropTypes.arrayOf(React.PropTypes.object)//.isRequired,
	},
	getDefaultProps: function() {
		return {pastGames: []};
	},
	buildPastGames: function() {
		var single_past_games = [];
		this.props.pastGames.forEach(function(pastGame,i) {
			single_past_games.push(
				<PastGame accuracy={pastGame.accuracy} wpm={pastGame.wpm} time={pastGame.time} key={i}/>
			);
		});
		return single_past_games;
	},
	render: function() {
		return(
			<div className="pastGames">
				{this.buildPastGames()}
			</div>
		)
	}
})