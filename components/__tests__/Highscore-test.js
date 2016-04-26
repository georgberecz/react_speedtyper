"use strict";

jest.unmock('../Highscore');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Highscore from '../Highscore';

describe('highscore', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildHighscore = ((accuracy, wpm) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<Highscore bestAccuracy={accuracy} bestWpm={wpm} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "highscore")
  });

  it('sets highscore and class', () => {
    let highscore = buildHighscore(10, 20);
	expect(highscore.className).toEqual("highscore");
    let accuracy = highscore.childNodes[1];
    expect(accuracy.textContent).toEqual("Best Accuracy: 10%")
    let wpm = highscore.childNodes[0];
    expect(wpm.textContent).toEqual("Best WPM: 20")
  });
});