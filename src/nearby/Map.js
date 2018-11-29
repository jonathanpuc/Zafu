import React from 'react';
import GoogleMapReact from 'google-map-react';
import { mapsKey } from '../shared/config';
import mapStyles from './mapStyles';
import Marker from './Marker';
// selectedPlaceId

export default class Map extends React.Component {
  state = {
    zoom: 13.5
  };

  onMarkerSelected = placeId => {
    this.props.onPlaceSelect(placeId);
    console.log(placeId);
  };

  handleOutsideClick = () => {
    this.props.onPlaceDeselect();
  };

  determineMapCenter = () => {
    const selectedPlace = this.props.places.find(
      place => place.id === this.props.selectedPlaceId
    );
    console.log(selectedPlace);
    if (selectedPlace) {
      console.log({
        lat: selectedPlace.latlng.lat,
        lng: selectedPlace.latlng.lng
      });
      return {
        lat: selectedPlace.latlng.lat,
        lng: selectedPlace.latlng.lng
      };
    } else {
      return {
        lat: this.props.userLocation.lat,
        lng: this.props.userLocation.lng
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
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultZoom={this.state.zoom}
          center={center}
          options={{ styles: mapStyles }}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}
