import React, { Component } from 'react';
import Header from './shared/Header';
import Routes from './core/Routes';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
