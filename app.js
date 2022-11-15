const http = require("http");

// Create a local server to receive data from
const server = http.createServer();

const port = 4000;

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(port);