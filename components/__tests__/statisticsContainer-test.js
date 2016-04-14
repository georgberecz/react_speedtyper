'use strict';

jest.unmock('../statisticsContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StatisticsContainer from "../statisticsContainer";
import Statistics from "../statistics";

Statistics.mockImplementation(() => <div />)

describe('StatisticsContainer', () => {
  var buildStatisticsContainer = ((startTime,pastInput,words) => {
    return TestUtils.renderIntoDocument(
      <StatisticsContainer time={startTime} writtenWords={pastInput} words={words}/>
    );
  });

  it('calculates accuracy', () => {
    var startTime= Date.now();

    let statisticsContainer = buildStatisticsContainer(startTime, ["a", "c"], ["a", "b"] );
    expect(statisticsContainer.getAccuracy()).toEqual(50);

    statisticsContainer = buildStatisticsContainer(startTime, ["a", "b"], ["a", "b"]);
    expect(statisticsContainer.getAccuracy()).toEqual(100);
  });

  it('calculates words per minute', () => {
    let minute = 1000 * 60;
    let startTime = Date.now() - minute;

    let statisticsContainer = buildStatisticsContainer(startTime, ["a", "b"], []);
    expect(statisticsContainer.getWpm()).toEqual(2);

    statisticsContainer = buildStatisticsContainer(startTime, ["a", "b", "c", "d"], []);
    expect(statisticsContainer.getWpm()).toEqual(4);
  });

  it('renders Statistics', () => {
    let minute = 1000 * 60;
    let startTime = Date.now() - minute;
    let pastInput = ["a", "b"]
    let words = ["a", "c"]

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <StatisticsContainer time={startTime} writtenWords={pastInput} words={words} />
    );
    let statistics = renderer.getRenderOutput();
    expect(statistics.props).toEqual({wpm: 2, accuracy: 50});
	  //expect(statistics.type).toEqual(Statistics);
  });
});