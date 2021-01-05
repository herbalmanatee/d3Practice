import React from 'react';
import * as d3 from 'd3';
import DataCircles from './data-circles';

//REturns the largest x coord from data set
let xMax = (data) => {
  d3.max(data, (d) => {
    d[0]
  });
}

//Returns the largest y coord from data set
let yMax = (data) => {
  d3.max(data, (d) => {
    d[1]
  });
}

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
  return d3.scaleLinear()
    .domain([0, xMax(props)])
    .range([30, 440]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
  return d3.scaleLinear()
    .domain([0, yMax(props)])
    .range([270, 30]);
};

export default (props) => {
  console.log('scatterPlot: ', props);
  let scales = {
    xScale: xScale(props.data),
    yScale: yScale(props.data)
  }
  return (
    <div>
      <svg width={500} height={300}>
        <DataCircles data={props.data} scales={scales} />
      </svg>
    </div>
  )
}