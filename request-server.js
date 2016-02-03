'use strict';

let http = require('http');
let fs = require('fs');
let path = require('path');
let index = fs.readFileSync('index.html', 'utf8');
let mimeType = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css'
};

http.createServer((req, res) => {
  var file = path.basename(decodeURI(req.url)) || 'index.html';
  fs.exists(file, (exists) => {
    if(exists){
      fs.readFile(file, (err, data) => {
        if(err) { res.writeHeader(500); res.end('Error'); return; }
        var headers = {'Content-Type' : mimeType[path.extname(file)]};
        res.writeHead(200, headers);
        console.log(file);
        res.end(data);
      });
    }else{
      res.writeHeader(404);
      res.end();
    }
  });
}).listen(3001, () => {
  console.log('Running the request');
});
