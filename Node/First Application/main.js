var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Conten-type':'text/plain'});
    response.end('Hello World\n')
}).listen(8081);

console.log('Server is running at http://127.9.0.1:8081/')