"use strict";

jest.unmock('../GameButtons');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GameButtons from '../GameButtons';

describe('gameButtons', () => {
    var Wrapper = React.createClass({
        render: function() {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    var buildGameButtons = ((gameStarted, fetchInProgress, wordsFetched, onGameStartClick, onGameStopClick, onFetchWordsClick) => {
        let dom = TestUtils.renderIntoDocument(
            <Wrapper>
        	   <GameButtons 
                gameStarted={gameStarted}
                fetchInProgress={fetchInProgress}
                wordsFetched={wordsFetched}
                onGameStartClick={onGameStartClick}
                onGameStopClick={onGameStopClick}
                onFetchWordsClick={onFetchWordsClick}
              />
            </Wrapper>
        );
        return TestUtils.findRenderedDOMComponentWithClass(dom, "gameButtons")
    });

    let onGameStartClick = jest.genMockFunction();
    let onGameStopClick = jest.genMockFunction();
    let onFetchWordsClick = jest.genMockFunction();

    it('sets gameButtons and class', () => {
    
        let gameStarted = true;
        let fetchInProgress = false;
        let wordsFetched = true;

        let gameButtons = buildGameButtons(
        gameStarted,fetchInProgress,wordsFetched, 
        onGameStartClick, onGameStopClick, onFetchWordsClick);

        expect(gameButtons.className).toEqual("gameButtons");

        let fetchButton = gameButtons.children[0];
        expect(fetchButton.className).toEqual("gameButton");
    });

    it('disables gameButtons according to state', () => {
        let gameStarted = false;
        let fetchInProgress = false;
        let wordsFetched = false;

        let gameButtons = buildGameButtons(
        gameStarted,fetchInProgress,wordsFetched, 
        onGameStartClick, onGameStopClick, onFetchWordsClick);
        
        let fetchButton = gameButtons.children[0];
        expect(fetchButton.disabled).toEqual(false);
        let startButton = gameButtons.children[1];
        expect(startButton.disabled).toEqual(true);
        let stopButton = gameButtons.children[2];
        expect(stopButton.disabled).toEqual(true);
    });
});
