import React from "react"
import { Helmet } from "react-helmet"

const Map = () => {
  if (typeof window !== "undefined") {
    window.initMap = function () {
      const wtb = { lat: 51.10724, lng: 17.018846 }
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: wtb,
      })
      const marker = new window.google.maps.Marker({
        position: wtb,
        map: map,
      })
    }
  }
  return (
    <>
      <Helmet>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC51WrMRCAHKQMgwMGHv8aU3BjnsNpgelc&callback=initMap"
          async
          defer
        />
      </Helmet>
      <div>
        <div id="map" style={{ height: "500px", width: "500px" }}></div>
      </div>
    </>
  )
}

export default Map
