import React, { useEffect, useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './MapComponent';
import GeoJSONMap from './GeoJSONMap';
import Home from './Home';

function App() {
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   axios.get('/api/data')
  //     .then(response => {
  //       setData(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

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
        <Route path="/map" element={<GeoJSONMap />}/>
      </Routes>
    </div>
      // <GeoJSONMap />
      // <RouterProvider router={router} />
      // {/* <MapComponent /> */}
  );
}

export default App;