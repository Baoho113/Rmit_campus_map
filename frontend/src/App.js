import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import MapComponent from "./MapComponent/DrawingMapComponent";
import MapViewcomponent from "./MapComponent/MapViewComponent";
import DrawingOnImg from "./MapComponent/DrawingOnImg";
import ImgMapViewComponent from "./MapComponent/ImgMapViewComponent";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import About from "./components/About";
import Booking from "./Booking/Booking";

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/map">Campus Map</Link>
          </li>
          <li>
            <Link to="/imgmap">ClassMap</Link>
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
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
    // <GeoJSONMap />
    // <RouterProvider router={router} />
    // {/* <MapComponent /> */}
  );
}

export default App;
