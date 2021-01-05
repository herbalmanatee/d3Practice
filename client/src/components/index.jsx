import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rendered: true
    }
  }

  render () {
    return (
      <div>D3 PRACTICE !!!</div>
    );
  }
}

export default App;