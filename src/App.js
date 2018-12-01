import React, { Component } from 'react';
import Header from './shared/Header';
import Routes from './core/Routes';
class App extends Component {
  state = {
    location: {
      latitude: '',
      longitude: ''
    },
    positionError: ''
  };

  async componentDidMount() {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        this.positionSuccess,
        this.positionError
      );
    } else {
      /* geolocation IS NOT available */
    }
  }

  positionSuccess = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.setState({ location: { latitude, longitude } });
  };

  positionError = () => {
    this.setState({
      positionError:
        'There was an error fetching your location, please ensure permission is provided.'
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.positionError ? (
          this.state.positionError
        ) : !this.state.location.latitude ? (
          'Fetching your position'
        ) : (
          <Routes userLocation={this.state.location} />
        )}
      </div>
    );
  }
}

export default App;
