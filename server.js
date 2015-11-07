var Router = require(__dirname + '/lib/router');
var http = require('http');

var myRouter = new Router();

//<d:route to return awesome>
myRouter.get('/awesome', function(req, res) {
  //<i:it should write a head>
  res.writeHead(
    //<e:status=>
    200,
    //<e:Content-Type=>
    {'Content-Type':'text/plain'});
  //<:i>
  res.write('wow, such an awesome router');
  res.end();
});
//<:d>

//<d:route to return awesome>
myRouter.get('/awesome', function(req, res) {
  res.writeHead(
    //<i: it should have a status [status =]>
    400, //<:i>
    //<i: it should have a content-type [content-type =]
    {'Content-Type':'text/html'}); //<:i>
  res.writeHead(
  res.write('wow, such an awesome router');
  res.end();
});
//<:d>

http.createServer(function (req, res) {
  myRouter.route(req, res);
}).listen(3000, function() {
  console.log('listenin\' on 3000');
});
