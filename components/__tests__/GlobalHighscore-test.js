"use strict";

jest.unmock('../GlobalHighscore');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GlobalHighscore from '../GlobalHighscore';

describe('globalHighscore', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildHighscore = ((globalBestWpm) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<GlobalHighscore globalBestWpm={globalBestWpm} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "globalHighscore")
  });

  it('sets globalHighscore and class', () => {
    let globalHighscore = buildHighscore(10);
	  expect(globalHighscore.className).toEqual("globalHighscore");
    let wpm = globalHighscore.childNodes[0];
    expect(wpm.textContent).toEqual("Best WPM across all sessions: 10")
  });
});