// GeoJSONMap.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import './GeoJSONMap.css';

function GeoJSONMap({ geoJsonData, onPolygonChange }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const imageBounds = [
        [37.505, 126.65],
        [37.515, 126.675],
      ];

      const map = L.map('map', {
        center: [
          (imageBounds[0][0] + imageBounds[1][0]) / 2,
          (imageBounds[0][1] + imageBounds[1][1]) / 2,
        ],
        zoom: 16,
        maxZoom: 50,
        minZoom: 12,
        crs: L.CRS.Simple,
      });

      L.imageOverlay('images/class1.jpg', imageBounds).addTo(map);

      map.setMaxBounds(imageBounds);

      L.control.zoom({ position: 'topright' }).addTo(map);

      const drawnItems = L.geoJSON(geoJsonData, {
        onEachFeature: (feature, layer) => {
          layer.on('click', () => {
            // Notify the parent component of the clicked polygon
            onPolygonChange(feature);
          });
        },
      }).addTo(map);

      mapRef.current = map;
    }
  }, [geoJsonData, onPolygonChange]);

  return (
    <div id="map-container">
      <div id="map"></div>
    </div>
  );
}

export default GeoJSONMap;
