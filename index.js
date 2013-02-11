var seaport = require('seaport');
var server = seaport.createServer()

exports.listen = function(where) {
  server.listen(where);
  console.log("APPSERVER running on 19090");
}

exports.close = function() { 
  server.close();
}

if(!module.parent) {
  exports.listen(19090);
}
