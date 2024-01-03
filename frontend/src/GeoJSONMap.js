// GeoJSONMap.js
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geojsonFeature from "./building_info/buildingCollection";
import univLayer from "./univLayer.json";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component
import jsonRoutes from "./direction_info/b1_b2.json"; // 경로 정보가 들어있는 JSON 파일 가져오기

const GeoJSONMap = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(); // to store map object
  const handleDirection = (start, end) => {
    console.log("start point:", start);
    console.log("end point:", end);

    // Check if the start point is "current"
    if (start === "current") {
      navigator.geolocation.getCurrentPosition((location) => {
        const { latitude, longitude } = location.coords;
        setUserLocation([latitude, longitude]);

        const userMarker = L.marker([latitude, longitude], {
          icon: L.icon({
            iconUrl: "/images/person.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          }),
        }).addTo(mapRef.current);

        userMarker.bindPopup("Your Location").openPopup();

        // Draw a straight line from the user's current location to the end point
        const routeCoordinates = [userLocation, end];
        const routePolyline = L.polyline(routeCoordinates, {
          color: "red",
          weight: 5,
        }).addTo(mapRef.current);

        routePolyline.bringToFront();
        mapRef.current.fitBounds(routePolyline.getBounds());
      });
    } else {
      const selectedRoute = jsonRoutes.features.find(
        (route) =>
          route.properties.start === start && route.properties.end === end
      );

      if (selectedRoute) {
        const routeCoordinates = selectedRoute.geometry.coordinates;

        const routePolyline = L.polyline(routeCoordinates, {
          color: "red",
          weight: 5,
        }).addTo(mapRef.current);
        routePolyline.bringToFront();
        mapRef.current.fitBounds(routePolyline.getBounds());
      } else {
        console.log("Cannot find routes");
      }
    }
  };

  useEffect(() => {
    // Create a map and store it in the ref
    mapRef.current = L.map("map", {
      center: [10.7298, 106.69451],
      zoom: 20,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapRef.current);

    // Function to handle user's location
    const handleLocation = (location) => {
      const { latitude, longitude } = location.coords;
      setUserLocation([latitude, longitude]);
      console.log("latitude is", latitude);
      console.log("longitude is", longitude);

      // Add a marker for the user's location
      const userMarker = L.marker([latitude, longitude], {
        icon: L.icon({
          iconUrl: "/images/person.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        }),
      }).addTo(mapRef.current);

      userMarker.bindPopup("Your Location").openPopup();
    };

    // Get user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // Add university layer
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

    univLayerGroup.addTo(mapRef.current);

    // Add building polygons
    const buildingPolygons = [];
    const layers = L.geoJSON(geojsonFeature, {
      style: {
        fillColor: "blue",
        color: "black",
        weight: 1,
        fillOpacity: 0.3,
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(feature.properties.name);
        buildingPolygons.push(layer);
        layer.on("click", () => {
          const clickedBuildingName = feature.properties.name;
          setSelectedBuilding(clickedBuildingName);
        });
      },
    });

    layers.addTo(mapRef.current);

    // Handle click on the map
    mapRef.current.on("click", function (e) {
      const clickedLatLng = e.latlng;
      const clickedBuilding = buildingPolygons.find((layer) =>
        layer.getBounds().contains(clickedLatLng)
      );

      if (clickedBuilding) {
        const clickedBuildingName = clickedBuilding.feature.properties.name;
        clickedBuilding.bindPopup(clickedBuildingName).openPopup();
        setSelectedBuilding(null);
      }
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div>
      <NavigationBar handleDirection={handleDirection} />
      {/* Render the NavigationBar */}
      <div id="map" style={{ height: "500px" }}></div>
      {userLocation && (
        <div className="navigation-bar">
          <p>
            Your Location: {userLocation[0]}, {userLocation[1]}
          </p>
        </div>
      )}
      {selectedBuilding && (
        <div className="navigation-bar">
          <button onClick={() => setSelectedBuilding(null)}>X</button>
          <h2>{selectedBuilding}</h2>
          <img src={`images/selectedBuilding.jpg`} alt={selectedBuilding} />
          <p>Description of {selectedBuilding}</p>
        </div>
      )}
    </div>
  );
};

export default GeoJSONMap;
