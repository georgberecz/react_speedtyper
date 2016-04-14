"use strict";

jest.unmock('../statistics');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Statistics from '../statistics';

describe('statistics', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildStatistics = ((accuracy, wpm) => {
    let dom = TestUtils.renderIntoDocument(
        <Wrapper>
        	<Statistics accuracy={accuracy} wpm={wpm} />
        </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "statistics")
  });

  it('sets statistics and class', () => {
    let statistics = buildStatistics(10, 20);
	expect(statistics.className).toEqual("statistics");
    let accuracy = statistics.childNodes[1];
    expect(accuracy.textContent).toEqual("Accuracy: 10%")
    let wpm = statistics.childNodes[0];
    expect(wpm.textContent).toEqual("Words per Minute: 20")
  });
});