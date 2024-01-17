// GeoJSONMap.js
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geojsonFeature from "../building_info/buildingCollection";
import univLayer from "../univLayer.json";
import NavigationBar from "./NavigationBar"; // Import the NavigationBar component
import currentLocation from "../direction_info/building2Marker";
import jsonRoutes from "../direction_info/buildingRoutes.json"; // 경로 정보가 들어있는 JSON 파일 가져오기
import VerticalTab from "../components/VerticalTab";
import "../App.css";
import personImg from "../images/person.png"
const MapViewcomponent = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(); // to store map object
  let routePolyline = null; // Variable to store the drawn polyline

  const handleDirection = (start, end) => {
    console.log("start point:", start);
    console.log("end point:", end);

    // Remove existing route polyline if it exists
    if (routePolyline) {
      mapRef.current.removeLayer(routePolyline);
    }

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
        routePolyline = L.polyline(routeCoordinates, {
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

        routePolyline = L.polyline(routeCoordinates, {
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
      center: [10.7298, 106.69390],
      zoom: 20,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapRef.current);

    // Add the building marker
    // Access coordinates from currentLocation and create a marker
    const coordinates = currentLocation.features[0].geometry.coordinates;
    const description = currentLocation.features[0].properties.description;

    const icon = L.icon({
      iconUrl: personImg,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const marker = L.marker(coordinates, { icon: icon }).addTo(mapRef.current);
    marker.bindPopup(description).openPopup();

    console.log("coordinates is ", coordinates);
    const current = L.marker(coordinates.reverse());
    marker.bindPopup(description).openPopup();
    // };
    /*  
    // Function to handle user's location
    const handleLocation = (currentLocation) => {  
      const { latitude, longitude } = currentLocation.feature.geometry.coordinates;
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
 */
    // Get user's location using Geolocation API
    /*     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
 */
    // Add university layer
    const univLayerGroup = L.geoJSON(univLayer, {
      style: {
        fillColor: "pink",
        color: "pink",
        weight: 3,
        fillOpacity: 0.3,
      },
      onEachFeature: (feature, layer) => {
        layer.on("click", () => {
          const clickedBuildingName = feature;
          setSelectedBuilding(clickedBuildingName);
        });
      },
    });

    univLayerGroup.addTo(mapRef.current);

    // Add building polygons
    const buildingPolygons = [];
    const layers = L.geoJSON(geojsonFeature, {
      style: {
        fillColor: "pink",
        color: "black",
        weight: 2,
        fillOpacity: 0.4,
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(feature.properties.name);
        buildingPolygons.push(layer);
        layer.on("click", () => {
          const clickedBuildingName = feature;
          setSelectedBuilding(clickedBuildingName);
        });
      },
    });

    layers.addTo(mapRef.current);

    // Handle click on the map
    mapRef.current.on("click", function (e) {
      const clickedLatLng = e.latlng;
      try {
        const clickedBuilding = buildingPolygons.find((layer) =>
          layer.getBounds().contains(clickedLatLng)
        );

        if (clickedBuilding) {
          const clickedBuildingName = clickedBuilding.feature.properties.name;
          clickedBuilding.bindPopup(clickedBuildingName).openPopup();
          setSelectedBuilding(null);
        }
      } catch (error) {
        console.error("An error occurred while handling the click:", error);
      }
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div>
      <VerticalTab data={geojsonFeature.features} setSelectedBuilding={[selectedBuilding, setSelectedBuilding]} />
      
      {/* Render the NavigationBar */}
      {userLocation && <div className="navigation-bar" />}
      <div id="map"></div>
      <NavigationBar handleDirection={handleDirection} />
      {selectedBuilding && (
        <div
          style={{
            maxWidth: 300,
            position: "absolute",
            top: 100,
            left: 370,
            padding: 20,
            color: "black",
            backgroundColor: "white",
            zIndex: 11,
            border: "1px solid",
            borderRadius: 20,
          }}
        >
          <button onClick={() => setSelectedBuilding(null)}>X</button>
          <h2 style={{textTransform: "capitalize" }}>{selectedBuilding.properties.name}</h2>
          <img style={{width: 300}} src={selectedBuilding.properties.image} alt={selectedBuilding.properties.name} />
          <p>{selectedBuilding.properties.description}</p>
        </div>
      )}
    </div>
  );
};

export default MapViewcomponent;