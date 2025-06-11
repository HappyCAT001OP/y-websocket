   import { WebsocketServer } from '@y/websocket-server'

   const port = process.env.PORT || 1234
   const wss = new WebsocketServer({ port })

   console.log(`Yjs WebSocket server running on port ${port}`)
