import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import GeoJSONMap from './GeoJSONMap';

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
      <GeoJSONMap />
      {/* <MapComponent /> */}
    </div>
  );
}

export default App;