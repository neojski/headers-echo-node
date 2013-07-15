var http = require('http');

var server = http.createServer();

function handleRequest(req, res){
  console.log('method', req.method);
  console.log('headers', req.headers)

  req.on('data', function(chunk){
    console.log(chunk.toString());
  });

  req.on('end', function(){
    console.log('=================');
  });
}

server.on('request', function(req, res){
  handleRequest(req, res);
  res.end();
});

server.on('checkContinue', function(req, res) {
  handleRequest(req, res);
  res.writeContinue();
  res.end();
});

server.listen(8000);
