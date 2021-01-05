import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default class ContactMap extends Component {
  position = [51.10724, 17.018846]

  render() {
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={this.position}
          zoom={14}
          style={{ width: "500px", height: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.position}>
            {" "}
            <Popup>
              WTB Telecom Sp. z o.o. Sp. k. <br></br>
              Pl. Orląt Lwowskich 20e <br></br>
              53-605 Wrocław
            </Popup>
          </Marker>
        </MapContainer>
      )
    }
    return null
  }
}
