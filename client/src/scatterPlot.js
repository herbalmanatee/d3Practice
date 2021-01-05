
let generateRandomDataSet = (length) => {
  let result = [];
  let randNum = () => Math.floor(Math.random() * 1000);
  for (i=0; i< length; i++) {
    let xCoords = randNum();
    let yCoords = randNum();
    result.push([xCoords, yCoords]);
  }
  return result;
}

module.exports = {
  generateScatterPlot: generateRandomDataSet
};
