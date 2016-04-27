
'use strict';

jest.unmock('../SpeedTyper');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from "../SpeedTyper";


describe('SpeedTyper', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildSpeedTyper = ((secondPlayerConnected) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <SpeedTyper secondPlayerConnected={secondPlayerConnected} />
      </Wrapper>
    );
    return TestUtils.findRenderedDOMComponentWithClass(dom, "speedTyperGame")
  });

  it('renders SpeedTyper', () => {
    
    let speedTyper = buildSpeedTyper(true);
	  expect(speedTyper.className).toEqual("speedTyperGame");
    let visibleSpeedTyper = speedTyper.children[0].children[1]
    expect(visibleSpeedTyper.className).toEqual("speedTyper ");
  });

  it('shows RemoteSpeedTyper if second Player connected', () => {
    let speedTyper = buildSpeedTyper(true);
    let visibleSpeedTyper = speedTyper.children[0].children[1]
    expect(visibleSpeedTyper.className).toEqual("speedTyper ");
  });

  it('does not show RemoteSpeedTyper if second Player is not connected', () => {
    let speedTyper = buildSpeedTyper(false);
    let visibleSpeedTyper = speedTyper.children[0].children[1]
    expect(visibleSpeedTyper.className).toEqual("speedTyper hidden");
  });
});