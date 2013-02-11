var seaport = require('seaport');
var server = seaport.createServer()

var listen = function(where) {
  server.listen(where);
  console.log("APPSERVER running on 19090");
}

var close = function() { 
  server.close();
}

if(!module.parent) {
  listen(19090);
}
