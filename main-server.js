'use strict';

let http = require('http');
let jsonResponse = {
  version : '1.0',
  message : 'Server enabled cors in nodejs'
};

http.createServer( (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.writeHeader(200, {'Content-Type' : 'application/json; charset:utf8'});

  res.write(JSON.stringify(jsonResponse));
  res.end();

}).listen(3000, () => {
  console.log('Server running');
});
