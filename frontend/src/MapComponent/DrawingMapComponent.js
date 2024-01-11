// import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// function MapComponent() {
//   useEffect(() => {
//     const mapElement = document.getElementById("map");
//     if (mapElement && !mapElement._leaflet_id) {
//       // Check if map is not already initialized
//       const map = L.map("map").setView([10.7298, 106.69451], 20); // RMIT Vietnam Ho Chi Minh Campus coordinates

//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: "© OpenStreetMap contributors",
//       }).addTo(map);
//     }
//   }, []);

//   return <div id="map" style={{ height: "500px" }}></div>;
// }

// export default MapComponent;

// 클라이언트(MapComponent.js) 측




import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import axios from 'axios';

function MapComponent() {
  const mapRef = useRef(null);
  const drawnItems = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([10.7298, 106.69451], 20);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      drawnItems.current = new L.FeatureGroup();
      map.addLayer(drawnItems.current);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems.current,
        },
        draw: {
          polygon: true,
          polyline: true,
          circle: false,
          marker: true,
          circlemarker: false,
          rectangle: true,
        },
      });
      map.addControl(drawControl);

      mapRef.current = map;

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        drawnItems.current.addLayer(layer);
      });
    }
  }, []);

  const saveShape = () => {
    if (drawnItems.current) {
      const geoJSON = drawnItems.current.toGeoJSON();
      const stringifiedData = JSON.stringify(geoJSON, null, 2);

      const blob = new Blob([stringifiedData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'drawn_shape.geojson';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // axios.post('/api/save-shape', { shapeData: geoJSON })
      //   .then(response => {
      //     console.log(response.data.message);
      //   })
      //   .catch(error => {
      //     console.error('Error saving shape:', error);
      //   });
    }
  };

  return (
    <div>
      <div id="map" style={{ height: '500px' }}></div>
      <button onClick={saveShape}>Save Shape</button>
    </div>
  );
}

export default MapComponent;
