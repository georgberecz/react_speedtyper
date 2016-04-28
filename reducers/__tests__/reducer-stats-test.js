'use strict';

global.sinon = require('sinon');

jest.disableAutomock();

import {getWpm, getAccuracy} from '../../reducers';

describe('statistics function', () => {
	describe('getWpm', () => {
		
		var clock = null;

		beforeEach(() => {
			clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
		});

		afterEach(() => {
			clock.restore();
		});

		it('should calculate wpm correctly', () => {
			let currentTime = Date.now()
			let minute = 1000 * 60;
    		let startTime = currentTime - minute;
			expect(getWpm({startTime: startTime, currentTime:currentTime, writtenWords:["a", "b"], words:["a","c"]})).toEqual(1);
			expect(getWpm({startTime: startTime, currentTime:currentTime, writtenWords:["a", "b", "c", "d"], words:["a", "b", "c", "d"]})).toEqual(4);
		})
	});

	describe('getAccuracy', () => {
		it('should calculate accuracy correctly', () => {
			expect(getAccuracy({words: ["a", "c"], writtenWords:["a", "b"]})).toEqual(50);
			expect(getAccuracy({words: ["a", "b"], writtenWords:["a", "b"]})).toEqual(100);
		})
	});
})