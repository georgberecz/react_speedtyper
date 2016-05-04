'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import KeyPressListener from '../../components/KeyPressListener';

// make sinon,chai,etc. work with jest
const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

global.chai = require('chai');
expect = chai.expect;
global.sinon = require('sinon');

const sinonChai = require('sinon-chai');
chai.use(sinonChai);
//

jest.disableAutomock();


describe('KeyPressListener', () => {
  var buildKeyPressListener = ((handleKeyPress, gameStarted) => {
    return TestUtils.renderIntoDocument(
      <KeyPressListener handleKeyPress={handleKeyPress} gameStarted={gameStarted}/>
    );
  });

  it('calls handleKeyPress with the key string when keypress triggered on window if game has started', () => {
    let handleKeyPress = sinon.stub()
    let gameStarted = true
    let keyPressListener = buildKeyPressListener(handleKeyPress, gameStarted);

    var event = new window.KeyboardEvent('keypress', {keyCode: 69})
    window.dispatchEvent(event)
    expect(handleKeyPress).to.have.been.calledWith("E")
  });

  it('does not handleKeyPress with the key string when keypress triggered on window if game has not started', () => {
    let handleKeyPress = sinon.stub()
    let gameStarted = false
    let keyPressListener = buildKeyPressListener(handleKeyPress, gameStarted);

    var event = new window.KeyboardEvent('keypress', {keyCode: 69})
    window.dispatchEvent(event)
    expect(handleKeyPress).to.not.have.been.calledWith("E")
  });  
});