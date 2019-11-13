const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 4000;

app.use(express.static(path.join('public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});



app.listen(port, () => {
  console.log(`---server starting on port ${port}---`);
});