const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function(request, response) {
  if(request.method == 'GET') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url == '/') {
      fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, content) => {
        if(err) {
          throw new Error('***ERR to view page index***');
        } else {
          response.end(content);
        }
      });
    } else if(request.url == '/about') {
      fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8', (err, content) => {
        if(err) {
          throw new Error('***ERR to view page index***');
        } else {
          response.end(content);
        }
      });
    } else if(request.url == '/api/users') {
      response.writeHead(200, {'Content-Type': 'text/json'});
      let users = [
        {name: 'Semen', age: 20},
        {name: 'Igor', age: 40}
      ];

      response.end(JSON.stringify(users));

    }
  } else if(request.method == 'post') {    
    const body = [];
    response.writeHead(200, {'Content-Type': 'text/html'});
    request.on('data', (data) => {
      body.push(Buffer.from(data));
    });

    request.on('end', () => {
      let message = body.toString().split('-')[1];      
    });

    response.end(`
      <h1>Ваше сообщение-${message}</h1>
    `);
  }

}).listen(4000, function() {
  console.log('server is starting');
});