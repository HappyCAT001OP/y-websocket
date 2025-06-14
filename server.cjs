const WebSocket = require('ws');
const http = require('http');
const { setupWSConnection } = require('./src/server.js');

const port = process.env.PORT || 1234;
const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, () => {
  console.log(`Yjs WebSocket server running on port ${port}`);
});
