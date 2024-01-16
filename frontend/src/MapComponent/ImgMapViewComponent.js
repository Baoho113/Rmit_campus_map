import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import img from "../floor_info/floor_img/b2_4.png";
import "../App.css";
import ImgPolygon from "../floor_info/b2_4.json";
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
          weight: 1,
          fillOpacity: 0.3,
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(feature.properties.name);
          layer.on("click", () => {
            const clickedBuildingName = feature.properties.name;
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
      <VerticalTab data={ImgPolygon.features} />
      <div id="imgmap" ref={mapContainer}></div>
    </div>
  );
};

export default ImgMapViewComponent;

