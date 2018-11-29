import React, { Component } from 'react';
import Header from './shared/Header';
import Start from './start';
import Nearby from './nearby';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Start />
        <Nearby />
      </div>
    );
  }
}

export default App;
