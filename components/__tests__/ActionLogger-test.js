'use strict';

import actionLogger from '../../middleware/ActionLogger'

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


describe('ActionLogger', () => {
  var clock = null;
  let logger, store, next, action, stateBefore, stateAfter;

  beforeEach(() => {
    logger = { log: sinon.stub() }
    store =  { getState: sinon.stub() }

    store.getState.returns(stateBefore)

    action = { type: 'a', payload: 1 }
    
    next = (action) => {
      store.getState.returns(stateAfter)
      return action;
    }
    clock = sinon.useFakeTimers()
  })

  afterEach(() => {
    clock.restore()
  })

  it("logs the actions per minute", () => {
    stateBefore = "before"
    stateAfter = "after"
    actionLogger(logger)(store)(next)(action)
    expect(logger.log).to.have.been.calledWith(12)
  })
  
  it("adds up multiple actions and logs them", () => {
    stateBefore = "before"
    stateAfter = "after"
    actionLogger(logger)(store)(next)(action)
    clock.tick(6000)
    actionLogger(logger)(store)(next)(action)
    expect(logger.log).to.have.been.calledWith(12)
  })
})
