import { setupWSConnection } from 'y-websocket/bin/utils.js';
import * as http from 'http';
import WebSocket from 'ws';

const port = process.env.PORT || 10000;
const host = '0.0.0.0';

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, host, () => {
  console.log(`Yjs WebSocket server running on ${host}:${port}`);
});
