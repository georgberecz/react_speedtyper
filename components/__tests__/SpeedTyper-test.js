
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

  var buildSpeedTyper = (() => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <SpeedTyper />
      </Wrapper>
    );
    return TestUtils.findRenderedDOMComponentWithClass(dom, "speedTyper")
  });

  it('renders SpeedTyper', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyper/>
    );
    let speedTyper = buildSpeedTyper(); //renderer.getRenderOutput();
	  expect(speedTyper.className).toEqual("speedTyper");
  });
});