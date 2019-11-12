const express = require('express');
const app = express();
const port = process.env.port || 4000;
const obj = require('./modules/obj');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');  
  console.log(`__dirname - ${__dirname}`);
  console.log(obj.truobj.name);  
  obj.sayHello();
});

app.listen(port, () => {
  console.log(`--- server start on port ${port} ---`);
});