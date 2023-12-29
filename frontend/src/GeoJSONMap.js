// GeoJSONMap.js
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import "./GeoJSONMap.css";

function GeoJSONMap() {
  const mapRef = useRef(null);
  const drawnItems = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const imageBounds = [[37.775, -122.42], [37.776, -122.418]];

      const map = L.map("map", {
        center: [
          (imageBounds[0][0] + imageBounds[1][0]) / 2,
          (imageBounds[0][1] + imageBounds[1][1]) / 2,
        ],
        zoom: 18,
        maxZoom: 50,
        minZoom: 12,
        crs: L.CRS.Simple,
      });

      L.imageOverlay("images/class1.jpg", imageBounds).addTo(map);

      map.setMaxBounds(imageBounds);

      L.control.zoom({ position: "topright" }).addTo(map);

      drawnItems.current = new L.FeatureGroup();
      map.addLayer(drawnItems.current);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems.current,
          poly: {
            allowIntersection: false,
          },
        },
        draw: {
          polygon: {
            allowIntersection: false,
            showArea: true,
          },
          circle: false,
          rectangle: false,
          marker: false,
          polyline: false,
        },
      });
      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        drawnItems.current.addLayer(layer);
        savePolygonToLocalStorage();
      });

      loadPolygonFromLocalStorage();

      mapRef.current = map;
    }
  }, []);

  const savePolygonToLocalStorage = () => {
    const geoJson = drawnItems.current.toGeoJSON();
    const geoJsonString = JSON.stringify(geoJson);
    localStorage.setItem("savedPolygon", geoJsonString);
  };

  const loadPolygonFromLocalStorage = () => {
    const savedPolygonString = localStorage.getItem("savedPolygon");
    if (savedPolygonString) {
      const savedPolygon = JSON.parse(savedPolygonString);
      L.geoJSON(savedPolygon).addTo(mapRef.current);
    }
  };

  return (
    <div id="map-container">
      <div id="map"></div>
    </div>
  );
}

export default GeoJSONMap;
