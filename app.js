var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var ip = require('ip');
var ipaddress = ip.address();

var useragent = require('express-useragent');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/api/whoami';
console.log(api);

app.get(api, function(req, res, next){
  console.log('369369');
  var language = req.acceptsLanguages();
  //console.log(req.useragent);
  var software = req.useragent.os;

  var browser = req.useragent.browser;
  //var ipv4 = req.ip;
  console.log(ipaddress);

  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software, 'browser':browser });
  next();
});

app.listen(3000, function(){
  console.log('listening to the port 3000')
})
