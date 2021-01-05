const d3 = require('d3');

let generateArray = (length) => {
  let result = [];
  for (let i=0; i<=length; i++) {
    result.push((Math.floor(Math.random()*420) + 80)) //rand number between 80 and 500
  }
  return result;
}

let data = generateArray(100);

const div = d3.create("div");

div.style("font", "10px sans-serif");
div.style("text-align", "right");
div.style("color", "white");

const bar = div.selectAll("div");

const barUpdate = bar.data(data);
const barNew = barUpdate.join("div")

barNew.style("background", "steelblue");
barNew.style("padding", "3px");
barNew.style("margin", "1px");

// Set the width as a function of data.
barNew.style("width", d => `${d * 10}px`);

// Set the text of each bar as the data.
barNew.text(d => d);

// Return the chart container.
//return div.node();

