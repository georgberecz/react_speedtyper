/*
'use strict';

jest.unmock('../speedTyperContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperContainer from "../speedTyperContainer";
import SpeedTyper from "../speedTyper";

SpeedTyper.mockImplementation(() => <div />)

describe('SpeedTyperContainer', () => {
  var buildSpeedTyperContainer = (() => {
    return TestUtils.renderIntoDocument(
      <SpeedTyperContainer />
    );
  });

  it('changes current input if letter was entered', () => {
    let speedTyperContainer = buildSpeedTyperContainer();
    speedTyperContainer.handleInputChange("something");
    expect(speedTyperContainer.state.text).toEqual("something");
    expect(speedTyperContainer.state.writtenWords).toEqual([]);
  });

  it('sets user input to past input if current input last letter was space', () => {
    let speedTyperContainer = buildSpeedTyperContainer();
    speedTyperContainer.handleInputChange("something ");
    expect(speedTyperContainer.state.text).toEqual("");
    expect(speedTyperContainer.state.writtenWords).toEqual(["something"]);
  });

  it('renders SpeedTyper', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyperContainer />
    );
    let speedTyper = renderer.getRenderOutput();
	  expect(speedTyper.type).toEqual(SpeedTyper);
  });
});*/