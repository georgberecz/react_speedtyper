
'use strict';

jest.unmock('../SpeedTyperGame');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperGame from "../SpeedTyperGame";


describe('SpeedTyperGame', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildSpeedTyper = (() => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <SpeedTyperGame />
      </Wrapper>
    );
    return TestUtils.findRenderedDOMComponentWithClass(dom, "speedTyperGameContainer")
  });

  it('renders SpeedTyperGame', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyperGame/>
    );
    let speedTyperGame = buildSpeedTyper();
	  expect(speedTyperGame.className).toEqual("speedTyperGameContainer");
  });
});