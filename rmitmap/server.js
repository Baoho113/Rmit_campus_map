const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let savedPolygon = null;

app.post('/savePolygon', (req, res) => {
  savedPolygon = req.body.polygon;
  res.json({ message: 'Polygon saved successfully.' });
});

app.get('/getSavedPolygon', (req, res) => {
  res.json({ polygon: savedPolygon });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${3500}`);
});
