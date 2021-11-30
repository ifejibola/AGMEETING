# Socket IO Research

### Documentation
- [https://socket.io/get-started/chat](https://socket.io/get-started/chat)

### Connection
- In the majority of cases the connection is established using `Websocket`.
- If `Websocket` is not available it will resort to using `HTTP` long-polling.
- If connection is lost it will automatically attempt to reconnect.

### Getting Started
- Works very well with `express` in `Node.JS`.
- Socket IO is composed of two parts:
  - A server that integrates (or mounts on) the Node.JS HTTP `server socket.io`.
  - A client library that loads on the browser-side `socket.io-client`.
- During development `socket.io` serves the client automatically.
- The package can be installed using `npm install socket.io`.
- Then it needs to be added to the server, and the `index.html` on the client side.

### Emitting Events
- It can send and receive any events you would like.

### Broadcasting
- Emitting the event from the server to the rest of the users.
