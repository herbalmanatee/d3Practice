import React from 'react';


let renderCircles = (props) => {
  return (coords, index) => {

    let circleProps = {
      cx: coords[0]/10, //props.scales.xScale(coords[0]),
      cy: coords[1]/10,
      r: 2,
      key: index
    };
    return <circle {...circleProps} />;
  }
}

export default (props) => {
  console.log('data-circles: ', props);
  return(
    <g>
      {props.data.map(renderCircles(props))}
    </g>
  )
}

//<DataCircles data={this.props.data} scales={scales} />