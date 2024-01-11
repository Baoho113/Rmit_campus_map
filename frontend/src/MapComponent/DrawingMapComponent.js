import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';

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
