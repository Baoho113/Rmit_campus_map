import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geojsonFeature from "./building_info/buildingCollection"; // 기존 geojson 파일 경로
import univLayer from "./univLayer.json"; // 새로운 geojson 파일 경로

const GeoJSONMap = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    const map = L.map("map", {
      center: [10.7298, 106.69451],
      zoom: 20,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    // 새로운 건물 레이어 추가
    const univLayerGroup = L.geoJSON(univLayer, {
      style: {
        fillColor: "yellow",
        color: "black",
        weight: 1,
        fillOpacity: 0.2,
      },
      onEachFeature: (feature, layer) => {
        layer.on("click", () => {
          const clickedBuildingName = feature.properties.name;
          setSelectedBuilding(clickedBuildingName);
        });
      },
    });

    univLayerGroup.addTo(map);
    // Set list to store existing building
    const buildingPolygons = [];

    // Add style and display pop up on the map
    const layers = L.geoJSON(geojsonFeature, {
      style: {
        fillColor: "blue",
        color: "white",
        weight: 1,
        fillOpacity: 0.5,
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(feature.properties.name);
        buildingPolygons.push(layer); // Add building layer

        layer.on("click", () => {
          const clickedBuildingName = feature.properties.name;
          setSelectedBuilding(clickedBuildingName);
        });
      },
    });

    layers.addTo(map);

    // click event
    map.on("click", function (e) {
      const clickedLatLng = e.latlng;
      const clickedBuilding = buildingPolygons.find((layer) =>
        layer.getBounds().contains(clickedLatLng)
      );

      if (clickedBuilding) {
        const clickedBuildingName = clickedBuilding.feature.properties.name;
        clickedBuilding.bindPopup(clickedBuildingName).openPopup();
        setSelectedBuilding(null); // if click univ layer, close navigation bar
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "500px" }}>
      {/* map rendering component */}
      </div>
      {selectedBuilding && (
        <div className="navigation-bar">
          {/*  navigation bar */}
          <button onClick={() => setSelectedBuilding(null)}>X</button>
          <h2>{selectedBuilding}</h2>
          {/* display description */}
          <img src={`images/${selectedBuilding}.jpg`} alt={selectedBuilding} />
          <p>Description of {selectedBuilding}</p>
        </div>
      )}
    </div>
  );
};

export default GeoJSONMap;
