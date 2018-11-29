import React from 'react';
import Zomato from '../shared/Zomato';
// import Map from './Map'
export default class Nearby extends React.Component {
  state = {
    places: []
  };

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = async () => {
    try {
      const response = await Zomato.getNearbyLocations(
        '-37.8595388',
        '144.9404764'
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
        }
      };
    });
  };

  render() {
    return <div>Hello</div>;
  }
}
