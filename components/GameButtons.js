"use strict";
var React = require('react');
var GameButtons;

module.exports = GameButtons = React.createClass({
	propTypes: {
		gameStarted: React.PropTypes.bool.isRequired,
		fetchInProgress: React.PropTypes.bool.isRequired,
		wordsFetched: React.PropTypes.bool.isRequired,
		onGameStartClick: React.PropTypes.func.isRequired,
		onGameStopClick: React.PropTypes.func.isRequired,
		onFetchWordsClick: React.PropTypes.func.isRequired
	},
	handleStartButtonClick: function(e) {
		this.props.onGameStartClick();
	},
	handleStopButtonClick: function(e) {
		this.props.onGameStopClick();
	},
	handleFetchWordsClick: function(e) {
		this.props.onFetchWordsClick();
	},
	render: function() {
		return (
			<div className="gameButtons">
				<button 
					type="button"
					className="gameButton"
					disabled={this.props.fetchInProgress}
					onClick={this.handleFetchWordsClick}
				>
					Fetch Words
				</button>
				<button 
					type="button"
					className="gameButton"
					disabled={
						(this.props.gameStarted || !(this.props.wordsFetched))
					}
					onClick={this.handleStartButtonClick}
				>
					Start
				</button>	
				<button 
					type="button"
					className="gameButton"
					disabled={!(this.props.gameStarted)}
					onClick={this.handleStopButtonClick}
				>
					Stop
				</button>
			</div>	
		);
	}
});
