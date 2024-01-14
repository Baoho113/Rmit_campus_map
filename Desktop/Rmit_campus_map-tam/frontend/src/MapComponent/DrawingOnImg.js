import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import img from "../FloorImages/imgmap.png";
import "../App.css";
import ImgPolygon from "./ImgPolygon.json";
import VerticalTab from "../components/VerticalTab";

const DrawingOnImg = () => {
  const mapContainer = useRef(null);
  const [drawnItems, setDrawnItems] = useState(null);
  const aspectRatio = useRef(null);
  const map = useRef(null);
  const isMounted = useRef(true); // Track whether the component is mounted

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
      if (map.current) {
        map.current.remove();
      }
    };
  }, []); // useEffect only runs once on mount

  useEffect(() => {
    if (!mapContainer.current || !isMounted.current) return;

    const initializeMap = () => {
      map.current = L.map(mapContainer.current, {
        crs: L.CRS.Simple,
      });

      const imageObj = new Image();
      imageObj.src = img;

      imageObj.onload = function () {
        const imgWidth = imageObj.width;
        const imgHeight = imageObj.height;

        aspectRatio.current = imgWidth / imgHeight;

        const mapHeight = mapContainer.current.clientHeight;
        const maxHeight = mapHeight;
        const maxWidth = maxHeight * aspectRatio.current;
        const bounds = [
          [0, 0],
          [maxHeight, maxWidth],
        ];

        map.current.fitBounds(bounds);

        const image = L.imageOverlay(img, bounds);
        image.addTo(map.current);

        const drawnItemsLayer = new L.FeatureGroup();
        map.current.addLayer(drawnItemsLayer);
        setDrawnItems(drawnItemsLayer);

        const drawControl = new L.Control.Draw({
          draw: {
            polygon: true,
            marker: false,
            circlemarker: false,
          },
          edit: {
            featureGroup: drawnItemsLayer,
            remove: true,
          },
        });
        map.current.addControl(drawControl);

        map.current.on("draw:created", function (e) {
          const layer = e.layer;
          drawnItemsLayer.addLayer(layer);
        });
      };
    };

    initializeMap();
  }, []); // useEffect only runs once on mount

  const saveGeoJSON = () => {
    if (drawnItems) {
      const geoJSONData = drawnItems.toGeoJSON();
      const blob = new Blob([JSON.stringify(geoJSONData)], {
        type: "application/json",
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "drawnPolygon.geojson";
      a.click();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (map.current) {
        const mapHeight = mapContainer.current.clientHeight;
        const maxHeight = mapHeight;
        const maxWidth = maxHeight * aspectRatio.current;
        const newBounds = [
          [0, 0],
          [maxHeight, maxWidth],
        ];
        map.current.fitBounds(newBounds);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [aspectRatio, map]);

  return (
    <div>
      <VerticalTab data={ImgPolygon.features} />
      <div id="imgmap" ref={mapContainer}></div>
      <button onClick={saveGeoJSON}>Save GeoJSON</button>
    </div>
  );
};

export default DrawingOnImg;

