// MapWithPolygon.js

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithPolygon = () => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [/* Your map center lat, lon */],
      zoom: /* Your initial zoom level */,
    });

    // Assuming 'mapImage' is your map image URL and 'polygonCoords' contains polygon coordinates
    const mapBounds = [[/* Your image's top-left corner lat, lon */], [/* Your image's bottom-right corner lat, lon */]];
    const image = L.imageOverlay('mapImage', mapBounds).addTo(mapRef.current);

    // Example polygon coordinates
    const polygonCoords = [
      [/* Coordinates for your polygon */],
      [/* ... */],
      // Add more coordinates for your polygon
    ];

    const polygon = L.polygon(polygonCoords, { color: 'red' }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default MapWithPolygon;
