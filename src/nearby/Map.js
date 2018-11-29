import GoogleMapReact from 'google-map-react';
import { mapsKey } from '../shared/config';

export default class Map extends React.Component {
  state = {
    selectedLocation: '',
    zoom: 13.5
  };
  render() {
    const markers = this.props.places.map(place => (
      <Marker
        lat={place.latlng.lat}
        lng={place.latlng.lng}
        place={place}
        handleClick={this.onMarkerSelected}
        key={place.name}
        focus={this.state.selected.name === place.name}
      />
    ));

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        {/* center={this.state.selected.latlng} */}
        defaultZoom={this.state.zoom}
        options={mapOptions}
        onClick={this.handleOutsideClick}
      >
        {markers}
      </GoogleMapReact>
    );
  }
}
