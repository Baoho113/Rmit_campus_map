import React, { useState } from "react";

const NavigationBar = ({ handleDirection }) => {
  const [start, setstart] = useState("");
  const [end, setend] = useState("");

  const handlestartChange = (e) => {
    setstart(e.target.value);
    console.log("start point in navigation bar: " + e.target.value);
  };

  const handleendChange = (e) => {
    setend(e.target.value);
    console.log("end point in navigation bar: " + e.target.value);
  };

  const handleDirectionClick = () => {
    if (start === "current") {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        handleDirection([latitude, longitude], end);
      });
    } else {
      handleDirection(start, end);
    }
  };

  return (
    <div className="navigation-bar">
      <h2>Direction</h2>
      <label htmlFor="start">FROM</label>
      <select id="start" value={start} onChange={handlestartChange}>
        <option value="SELECT">SELECT</option>
        <option value="building 2">current location</option>
        <option value="building 1">building 1</option>
        <option value="building 2">building 2</option>
        {/* Add more options if needed */}
      </select>
      <label htmlFor="ens">TO</label>
      <select id="end" value={end} onChange={handleendChange}>
        <option value="SELECT">SELECT</option>
        <option value="">current location</option>
        <option value="building 1">building 1</option>
        <option value="building 2">building 2</option>
        {/* Add more options if needed */}
      </select>
      <button className="button-3" onClick={handleDirectionClick}>Show Directions</button>
    </div>
  );
};

export default NavigationBar;
