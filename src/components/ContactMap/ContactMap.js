import React, { Component } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

export default class ContactMap extends Component {
  position = [51.10724, 17.018846]

  render() {
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={this.position}
          zoom={10}
          style={{ width: "500px", height: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.position}></Marker>
        </MapContainer>
      )
    }
    return null
  }
}
