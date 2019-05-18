import React, { Component } from 'react';

class App extends Component {
  static propTypes = {}

  componentDidMount() {
    console.log(111);
  }


  render() {
    return (
      <div>
        <h1>test</h1>
        <img src="test" alt="test" />
      </div>
    );
  }
}

export default App;
