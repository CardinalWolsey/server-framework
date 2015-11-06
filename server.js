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

http.createServer(function (req, res) {
  myRouter.route(req, res);
}).listen(3000, function() {
  console.log('listenin\' on 3000');
});
