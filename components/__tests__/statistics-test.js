"use strict";

jest.unmock('../Statistics');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Statistics from '../Statistics';

describe('statistics', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildStatistics = ((accuracy, wpm, time) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<Statistics accuracy={accuracy} wpm={wpm} time={time}/>
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "statistics")
  });

  it('sets statistics and class', () => {
    let statistics = buildStatistics(10, 20, 1);
	expect(statistics.className).toEqual("statistics");
    let accuracy = statistics.childNodes[1];
    expect(accuracy.textContent).toEqual("Accuracy: 10%")
    let wpm = statistics.childNodes[0];
    expect(wpm.textContent).toEqual("Words per Minute: 20")
  });
});