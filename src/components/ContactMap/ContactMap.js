import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default class ContactMap extends Component {
  position = [51.10724, 17.018846]

  render() {
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          center={this.position}
          zoom={17}
          style={{ width: "700px", height: "500px" }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/sophijaful/ckkjk70lb1wuu17nwji2bwi5o/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_API_URL}`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
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
