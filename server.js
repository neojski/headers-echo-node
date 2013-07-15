var http = require('http');

var server = http.createServer();

server.on('connect', function(req, res){
  console.log('connected');
});

server.on('checkContinue', function(req, res) {
  console.log('headers', req.headers)

  req.on('data', function(chunk){
    console.log(chunk.toString());
  });

  res.writeContinue();
  res.end();
});

server.listen(8000);
