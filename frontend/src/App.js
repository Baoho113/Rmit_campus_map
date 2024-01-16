import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import MapComponent from "./MapComponent/DrawingMapComponent";
import MapViewcomponent from "./MapComponent/MapViewComponent";
import DrawingOnImg from "./MapComponent/DrawingOnImg";
import ImgMapViewComponent from "./MapComponent/ImgMapViewComponent";
import Home from "./Home";
import Contact from "./Contact";
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
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/imgmap">FloorMap</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="account">
          <li>
            <Link to="/login">Login</Link>
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
        <Route path="/drawimgmap" element={<DrawingOnImg />} />
        <Route path="/imgmap" element={<ImgMapViewComponent />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/calender" element={<Calendar />} /> */}
      </Routes>
    </div>
    // <GeoJSONMap />
    // <RouterProvider router={router} />
    // {/* <MapComponent /> */}
  );
}

export default App;
