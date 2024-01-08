// App.js
import React from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';

function App() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Comment out the component you don't want to display */}
      <MapComponent />
    </div>
  );
}

export default App;
