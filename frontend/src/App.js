import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "./MapComponent";
import GeoJSONMap from "./GeoJSONMap";
import MapWithPolygon from "./MapWithPolygon";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  /*   const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); */

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/map" element={<GeoJSONMap />} />
            {/* <GeoJSONMap /> */}
            <Route path="/drawmap" element={<MapComponent />} />
            <Route path="/imagemap" element={<MapWithPolygon/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
