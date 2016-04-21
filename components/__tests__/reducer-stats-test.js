'use strict';

jest.disableAutomock();

import {getWpm, getAccuracy} from '../../reducers';

describe('statistics function', () => {
	describe('getWpm', () => {
		
		var clock = null;

		before(() => {
			clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
		});

		after(() => {
			clock.restore();
		});

		it('should calculate wpm correctly', () => {
			let minute = 1000 * 60;
    		let startTime = Date.now() - minute;
			expect(getWpm({time: startTime, writtenWords:["a", "b"]})).toEqual(2);
			expect(getWpm({time: startTime, writtenWords:["a", "b", "c", "d"]})).toEqual(4);
		})
	});

	describe('getAccuracy', () => {
		it('should calculate accuracy correctly', () => {
			expect(getAccuracy({words: ["a", "c"], writtenWords:["a", "b"]})).toEqual(50);
			expect(getAccuracy({words: ["a", "b"], writtenWords:["a", "b"]})).toEqual(100);
		})
	});
})