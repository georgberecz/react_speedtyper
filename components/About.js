"use strict"

var React = require('react');
var About;

module.exports = About = React.createClass({
	render: () => {
		return(
			<div>
				<p>Made by Georg Berecz. </p>
				<p>To play simply press the "Fetch Words" button and afterwards the "Start" button. <br />
				By clicking "Start" the timer starts to count the seconds and you can directly begin to type the shown words. <br /> 
				Hit SPACE if you completed the current word. It is not possible to delete typed characters! <br />
				If you want to stop the game click the "Stop" button and your current scores are saved.
				 </p>
			</div>
		);
	}
})

