import React from 'react';
import GoogleMapReact from 'google-map-react';
import { mapsKey } from '../shared/config';
import mapStyles from './mapStyles';
import Marker from './Marker';
import UserMarker from './UserMarker';

export default class Map extends React.Component {
  state = {
    zoom: 13.5
  };

  componentDidMount() {
    console.log(this.props);
  }
  onMarkerSelected = placeId => {
    this.props.onPlaceSelect(placeId);
  };

  handleOutsideClick = () => {
    this.props.onPlaceDeselect();
  };

  determineMapCenter = () => {
    const selectedPlace = this.props.places.find(
      place => place.id === this.props.selectedPlaceId
    );

    if (selectedPlace) {
      return {
        lat: selectedPlace.latlng.lat,
        lng: selectedPlace.latlng.lng
      };
    } else {
      return {
        lat: this.props.userLocation.latitude,
        lng: this.props.userLocation.longitude
      };
    }
  };
  render() {
    const center = this.determineMapCenter();
    const markers = this.props.places.map(place => (
      <Marker
        lat={place.latlng.lat}
        lng={place.latlng.lng}
        place={place}
        onClick={this.onMarkerSelected}
        key={place.name}
        focus={this.props.selectedPlaceId === place.id}
      />
    ));

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultZoom={this.state.zoom}
          center={center}
          options={{ styles: mapStyles }}
        >
          <UserMarker
            lat={this.props.userLocation.latitude}
            lng={this.props.userLocation.longitude}
          />
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}
