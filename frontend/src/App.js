import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import MapComponent from "./MapComponent/DrawingMapComponent";
import MapViewcomponent from "./MapComponent/MapViewComponent";
import MapWithImage from "./MapComponent/MapWithImage";
import ImgMapViewComponent from "./MapComponent/ImgMapViewComponent";
import Home from "./Home";

function App() {

  return (
    <div>
      <nav>
        <ul className="storeName">
          <Link to="/" className="logo">
            <img src="image/logo.png" alt="" />
          </Link>
        </ul>
        <ul className="menu">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="account">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className="link">
              Sign up
            </a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapViewcomponent />} />
        <Route path="/drawmap" element={<MapComponent />} />
        <Route path="/drawimgmap" element={<MapWithImage />} />
        <Route path="/imgmap" element={<ImgMapViewComponent />} />
        
      </Routes>
    </div>
    // <GeoJSONMap />
    // <RouterProvider router={router} />
    // {/* <MapComponent /> */}
  );
}

export default App;
