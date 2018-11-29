import React from 'react';
import Zomato from '../shared/Zomato';
import Map from './Map';
export default class Nearby extends React.Component {
  state = {
    places: [],
    selectedPlaceId: '',
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
    this.loadPlaces();
  };

  positionError = () => {
    this.setState({
      positionError:
        'There was an error fetching your location, please ensure permission is provided.'
    });
  };

  loadPlaces = async () => {
    const { location } = this.state;
    try {
      // const response = await Zomato.getNearbyLocations(
      //   '-37.8595388',
      //   '144.9404764'
      // );

      const response = await Zomato.getNearbyLocations(
        location.latitude,
        location.longitude
      );
      const results = response.data.restaurants;
      this.setState({
        places: this.constructPlaceObj(results)
      });
    } catch (e) {
      console.log(e);
    }
  };

  constructPlaceObj = dataArr => {
    return dataArr.map(data => {
      const place = data.restaurant;
      return {
        id: place.id,
        name: place.name,
        rating: {
          aggregate: place.user_rating.aggregate_rating,
          votes: place.user_rating.votes
        },
        latlng: {
          lat: parseFloat(place.location.latitude),
          lng: parseFloat(place.location.longitude)
        }
      };
    });
  };

  handlePlaceSelect = id => {
    this.setState({ selectedPlaceId: id });
  };

  handlePlaceDeselect = () => {
    this.setState({ selectedPlaceId: '' });
  };

  render() {
    return (
      <div>
        <Map
          selectedPlaceId={this.state.selectedPlaceId}
          places={this.state.places}
          onPlaceSelect={this.handlePlaceSelect}
          onPlaceDeselect={this.handlePlaceDeselect}
          userLocation={{
            lat: this.state.location.latitude,
            lng: this.state.location.longitude
          }}
        />
      </div>
    );
  }
}
