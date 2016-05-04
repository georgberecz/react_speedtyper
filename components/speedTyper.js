"use strict";

var React = require('react');
import InputContainer from "../containers/InputContainer";
import WordsContainer from "../containers/WordsContainer";
import StatisticsContainer from "../containers/StatisticsContainer";
import GameButtonsContainer from "../containers/GameButtonsContainer";
import HighscoreContainer from "../containers/HighscoreContainer";
import RemoteWordsContainer from "../containers/RemoteWordsContainer";
import RemoteStatisticsContainer from "../containers/RemoteStatisticsContainer";
import GlobalHighscoreContainer from "../containers/GlobalHighscoreContainer";

var SpeedTyper;

module.exports = SpeedTyper = React.createClass({
	propTypes: {
		secondPlayerConnected: React.PropTypes.bool.isRequired
	},
	render: function() {
		let visibilityClass = this.props.secondPlayerConnected ? "" : "hidden"
		return(
			<div className="speedTyperGame">
				<div className ="speedTypers">	
					<div className="speedTyper">
						<WordsContainer />
						
						<StatisticsContainer />
						<GameButtonsContainer />
						<HighscoreContainer />
					</div>	
					<div className={"speedTyper " + visibilityClass}>
						<RemoteWordsContainer />
						<RemoteStatisticsContainer />
					</div>
				</div>
				<div className={"globalHighscore " + visibilityClass}>
					<GlobalHighscoreContainer />
				</div> 
			</div>
		);
	}
});
