const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node app!');
});

// Listen on all interfaces, not just localhost
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
