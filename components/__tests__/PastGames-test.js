'use strict'

jest.unmock('../PastGames');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PastGames from '../PastGames' 
import PastGame from '../PastGame' 

PastGame.mockImplementation(() => <div />);

describe('PastGames', () => {
	it('renders pastGames', () => {
		let pastGamesArray = [{accuracy: 1, wpm: 1, time: 1}]

		let renderer = TestUtils.createRenderer();
		renderer.render(
			<PastGames pastGames={pastGamesArray} />
		);
		let pastGames = renderer.getRenderOutput()

		let pastGame = pastGames.props.children[0]
		expect(pastGame.props).toEqual({accuracy: 1, wpm: 1, time:1})
	})
})