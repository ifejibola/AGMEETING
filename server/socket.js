const Message = require("./chat/models/message");
const app = require("./server");

const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    console.log(data.userId);
    Message.create({
      user_id: data.user_id,
      meeting_id: data.meeting_id,
      moderator_id: data.moderator_id,
      content: data.content,
      timestamp: data.timestamp,
    }).then((data) => {
      console.log("created message");
    });
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

// Run chat server on seperate port
server.listen(4000, () => {
  console.log(`The chat server is running on port: ${4000}`);
});

module.exports = io;
