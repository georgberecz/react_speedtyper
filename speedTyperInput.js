"use strict";
var React = require('react');
var SpeedTyperInput;

module.exports = SpeedTyperInput = React.createClass({
	getInitialState: function() {
		return {text: ''};
	},
	handleInputChange: function(e) {
		this.setState({text: e.target.value});
	},
	render: function() {
		return (
			<input 
				type="text" 
				placeholder="write here"
				onchange={this.handleInputChange}
			/>
		);
	}
});
