var listen = function(where) {
  var seaport = require('seaport');
  var server = seaport.createServer()
  server.listen(where);
  console.log("APPSERVER running on 19090");
}

if(!module.parent) {
  listen(19090);
}
