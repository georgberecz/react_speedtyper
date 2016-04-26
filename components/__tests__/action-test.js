import * as actions from '../../actions'
global.chai = require('chai');
global.sinon = require('sinon');

const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

global.chai = require('chai');
expect = chai.expect;
global.sinon = require('sinon');

const sinonChai = require('sinon-chai');
chai.use(sinonChai);


jest.disableAutomock();

let xhr, requests;

describe('speedTyperApp actions', () => {
	var clock = null;

	beforeEach(() => {
		clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
	});

	afterEach(() => {
		clock.restore();
	});


  	it('speedTyperApp should create INPUT_CHANGE action', () => {
    	expect(actions.handleInputChange('blub')).to.eql({
      		type: 'INPUT_CHANGE',
      		payload: {text: 'blub'}
    	})
  	});

  	it('speedTyperApp should create GAME_START action', () => {
    	var time = Date.now();
    	let dispatch = sinon.stub()
    	actions.startGame()(dispatch)
    	expect(dispatch).to.have.been.calledWith({
      		type: 'GAME_START',
      		payload: {time: time}
    	})
  	});

  	it('speedTyperApp should create GAME_STOP action', () => {
    	let dispatch = sinon.stub()
    	actions.stopGame()(dispatch)
    	expect(dispatch).to.have.been.calledWith({
      		type: 'GAME_STOP'
    	})
  	});

  	it('speedTyperApp should create INPUT_CHANGE action', () => {
    	expect(actions.updateGame()).to.eql({
      		type: 'UPDATE_GAME'
    	})
  	});

  	it('speedTyperApp should create SET_WORDS action', () => {
    	expect(actions.setWords(["blub", "blab"])).to.eql({
      		type: 'SET_WORDS',
      		payload: {words: ["blub", "blab"]}
    	})
  	});

  	describe('fetchPost', () => {
		beforeEach(() => {
			global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

			requests = [];
			xhr.onCreate = (xhr) => requests.push(xhr)
		})
		afterEach(() => {
			xhr.restore()
		})

		it('adds words when fetched and fetching in progress', () => {
			let dispatch = sinon.stub()
			let getState = () => {
			  return { fetch: {inProgress: true}}
			}
			actions.fetchPost()(dispatch, getState)
			requests[0].respond(200, {}, '{"words" : ["blub","blab"] }')

			expect(dispatch).to.have.been.calledWith({
			  	type: 'SET_WORDS',
			  	payload: {
			    	words: ["blub","blab"]
			  	}
			})
		})

		it('does not add words when fetching not in progress', () => {
			let dispatch = sinon.stub()
			let getState = () => {
			  	return { fetch: {inProgress: false}}
			}
			actions.fetchPost()(dispatch, getState)
			requests[0].respond(200, {}, '{"words" : ["blub","blab"] }')

			expect(dispatch).not.to.have.been.calledWith(sinon.match({type: 'SET_WORDS'}))
		})

	})
});


