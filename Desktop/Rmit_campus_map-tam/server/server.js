// 서버(server.js) 측

const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 5000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "rmit_map",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

app.post('/api/save-shape', (req, res) => {
    const shapeData = req.body.shapeData;
  
    // shapeData에서 필요한 정보 추출
    const buildings = shapeData.features.map((feature) => {
      const { name } = feature.properties;
      const [xx, xy] = feature.geometry.coordinates[0];
      const [yx, yy] = feature.geometry.coordinates[1];
  
      return {
        name,
        xx,
        xy,
        yx,
        yy,
      };
    });
  
    // buildings를 MySQL에 삽입하는 코드
    const query = 'INSERT INTO building_coordinate (building, xx, xy, yx, yy) VALUES ?';
    const values = buildings.map((building) => [
      building.name,
      building.xx,
      building.xy,
      building.yx,
      building.yy,
    ]);
  
    connection.query(query, [values], (error, results, fields) => {
      if (error) {
        console.error('Error inserting shape data:', error);
        res.status(500).json({ message: 'Error saving shape data' });
        return;
      }
      res.json({ message: 'Shape data received and saved.' });
    });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
