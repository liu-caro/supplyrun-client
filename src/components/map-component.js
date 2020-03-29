import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainerHOC extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

const MapContainer = GoogleApiWrapper({
  apiKey: "IzaSyBdJ2cYDGw3-Z4UAH1yyzFDK-8--Fyyh0g"
})(MapContainerHOC);

export { MapContainer };
