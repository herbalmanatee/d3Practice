import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
let generateScatterPlot = require('../scatterPlot.js');
import ScatterPlot from './scatterPlot.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
      scatterPlot: []
    }
  }

  randomizeScatterPlot (length) {
    let data = generateScatterPlot.generateScatterPlot(length);
    console.log(data);
    this.setState({
      scatterPlot: data
    })
  }

  render () {
    return (
      <div>
        <div>D3 PRACTICE !!!</div>
        <ScatterPlot data={this.state.scatterPlot} />
        <button onClick={this.randomizeScatterPlot.bind(this, 50)}>Generate Array</button>
        <div>{this.state.array}</div>
      </div>

    );
  }
}

export default App;