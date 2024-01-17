// import React, { useRef, useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";
// import L from "leaflet";
// import "leaflet-draw";
// import img from "../FloorImages/imgmap.png";
// import "../App.css";
// import ImgPolygon from "./ImgPolygon.json";
// import VerticalTab from "../components/VerticalTab";

// const ImgMapViewComponent = () => {
//   const mapContainer = useRef();
//   const mapRef = useRef();  // Use mapRef to hold a reference to the map instance
//   const [selectedBuilding, setSelectedBuilding] = useState(null);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     // Leaflet initialization
//     mapRef.current = L.map(mapContainer.current, {
//       crs: L.CRS.Simple,
//     });

//     // Create an image object to get its natural size
//     const imageObj = new Image();
//     imageObj.src = img;

//     // Get the natural width and height of the image
//     const imgWidth = imageObj.naturalWidth;
//     const imgHeight = imageObj.naturalHeight;
//     // Calculate the aspect ratio of the image
//     const aspectRatio = imgWidth / imgHeight;
//     // Set the maximum height for the image based on the map's height
//     const mapHeight = mapContainer.current.clientHeight;
//     const maxHeight = mapHeight;
//     // Calculate the corresponding maximum width based on the aspect ratio
//     const maxWidth = maxHeight * aspectRatio;
//     // Custom image size and bounds based on the adjusted size
//     const bounds = [
//       [0, 0],
//       [maxHeight, maxWidth],
//     ];

//     // Fit the map to the bounds of the image
//     mapRef.current.fitBounds(bounds);

//     const image = L.imageOverlay(img, bounds);
//     image.addTo(mapRef.current);  // Use mapRef to add the image layer to the map

//     // Add building polygons
//     const buildingPolygons = L.geoJSON(ImgPolygon, {
//       style: {
//         fillColor: "blue",
//         color: "black",
//         weight: 1,
//         fillOpacity: 0.3,
//       },
//       onEachFeature: (feature, layer) => {
//         layer.bindPopup(feature.properties.name);
//         layer.on("click", () => {
//           const clickedBuildingName = feature.properties.name;
//           setSelectedBuilding(clickedBuildingName);
//         });
//       },
//     });

//     buildingPolygons.addTo(mapRef.current);  // Use mapRef to add buildingPolygons to the map

//     return () => {
//       // Clean up: remove the map when the component unmounts
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, []); // useEffect only runs once on mount

//   return (
//     <div>
//       <VerticalTab data={ImgPolygon.features} />

//       <div id="imgmap" ref={mapContainer}></div>
//     </div>
//   );
// };

// export default ImgMapViewComponent;

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import img from "../FloorImages/imgmap.png";
import "../App.css";
import ImgPolygon from "./ImgPolygon.json";
import VerticalTab from "../components/VerticalTab";

const ImgMapViewComponent = () => {
  const mapContainer = useRef();
  const mapRef = useRef();
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapRef.current = L.map(mapContainer.current, {
      crs: L.CRS.Simple,
    });

    const imageObj = new Image();
    imageObj.src = img;

    imageObj.onload = function () {
      const imgWidth = imageObj.width;
      const imgHeight = imageObj.height;

      const containerHeight = mapContainer.current.clientHeight;

      // Calculate the corresponding width based on the aspect ratio
      const containerWidth = (containerHeight / imgHeight) * imgWidth;

      const bounds = [
        [0, 0],
        [containerHeight, containerWidth],
      ];

      const image = L.imageOverlay(img, bounds);
      image.addTo(mapRef.current);

      const buildingPolygons = L.geoJSON(ImgPolygon, {
        style: {
          fillColor: "blue",
          color: "black",
          weight: 3,
          fillOpacity: 0.2,
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(feature.properties.name);
          layer.on("click", () => {
            const clickedBuildingName = feature;
            setSelectedBuilding(clickedBuildingName);
          });
        },
      });

      buildingPolygons.addTo(mapRef.current);

      mapRef.current.fitBounds(bounds); // Fit the map to the bounds of the image
    };

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div>
      <VerticalTab
        data={ImgPolygon.features}
        setSelectedBuilding={[selectedBuilding, setSelectedBuilding]}
      />
      <div id="imgmap" ref={mapContainer}></div>
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
          <h2 style={{ textTransform: "capitalize" }}>
            {selectedBuilding.properties.name}
          </h2>
          <p>{selectedBuilding.properties.description}</p>
        </div>
      )}
    </div>
  );
};

export default ImgMapViewComponent;
