'use strict'

jest.unmock('../PastGame')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import PastGame from '../PastGame'

describe('PastGame', () => {
	var Wrapper = React.createClass({
    render: function() {
      		return (
          		<div>{this.props.children}</div>
      		);
    	}
  	});

	var buildPastGame = ((accuracy, wpm, time) => {
    	let dom = TestUtils.renderIntoDocument(
        	<Wrapper>
        		<PastGame accuracy={accuracy} wpm={wpm} time={time} />
        	</Wrapper>
        )
        return TestUtils.findRenderedDOMComponentWithClass(dom, "pastGame")	
    });

	it('renders scores', () => {
		let accuracy = 1
		let wpm = 1
		let time = 1
		let pastGame = buildPastGame(accuracy,wpm,time)
		expect(pastGame.textContent).toEqual('Accuracy:1% WPM:1 Time:1s');
	})
})