// MapComponent.js
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import axios from 'axios';

function MapComponent() {
  const mapRef = useRef(null);
  const drawnItems = useRef(null);
  const [geoJsonPath, setGeoJsonPath] = useState('');
  const [selectedPolygon, setSelectedPolygon] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map', { drawControl: true }).setView([37.5665, 126.9780], 13);

      const imageUrl = 'images/B2L2.png';
      const imageBounds = [
        [37.527, 126.83],
        [37.608, 127.13],
      ];

      L.imageOverlay(imageUrl, imageBounds).addTo(map);

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

        const geoJSON = drawnItems.current.toGeoJSON();
        saveShape(geoJSON);
      });
    }
  }, []);

  const saveShape = async (geoJSON) => {
    try {
      // Save GeoJSON to the server
      const response = await axios.post('/api/savePolygon', {
        polygon: geoJSON,
      });

      // Set the returned GeoJSON path
      setGeoJsonPath(response.data.geoJsonPath);

      console.log(response.data.message);
    } catch (error) {
      console.error('Error saving shape:', error);
    }
  };

  useEffect(() => {
    const loadGeoJson = async () => {
      try {
        const response = await axios.get('/api/getSavedPolygon');
        setGeoJsonPath(response.data.geoJsonPath);
      } catch (error) {
        console.error('Error loading shape:', error);
      }
    };

    loadGeoJson();
  }, []);

  useEffect(() => {
    if (geoJsonPath) {
      axios.get(geoJsonPath).then((response) => {
        const geoJSON = response.data;
        L.geoJSON(geoJSON, {
          onEachFeature: (feature, layer) => {
            layer.on('click', () => {
              setSelectedPolygon(feature);
            });
          },
        }).addTo(mapRef.current);
      });
    }
  }, [geoJsonPath]);

  return (
    <div>
      <div id="map" style={{ height: '620px', margin: 'auto' }}></div>
      <button onClick={() => saveShape(drawnItems.current.toGeoJSON())}>Save Shape</button>
      {selectedPolygon && (
        <div>
          <h4>Selected Polygon:</h4>
          <pre>{JSON.stringify(selectedPolygon, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
