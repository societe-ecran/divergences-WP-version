import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../assets/css/main.css";
import * as parkData from "../data/liste-librairie.json";

export default function LeafletMaps() {
  const position = [47.295298, 2.550805];
  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/divergences/ckapdctf101321iozioh1a5xc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGl2ZXJnZW5jZXMiLCJhIjoiY2thcGU1bTZkMWVkNzJ6bXZxMjUzZG1mayJ9.k0hcee2Ul-JC2Vg7BGKFjg
             "
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />

      {parkData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0],
          ]}
        >
          <Popup
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
          >
            <div className="text-center">
              <span className="font-weight-bold">{park.properties.NAME}</span>{" "}
              <br />
              {park.properties.DESCRIPTIO}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>

  );
}
