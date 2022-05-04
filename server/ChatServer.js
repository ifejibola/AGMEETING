const express = require("express");
const app = express();
const cors = require('cors')
const{Server} =require("socket.io")
const http = require('http')

const PORT  = process.env.PORT || 5000

// var rooms = [];

app.use(cors());
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket)=>{
  console.log(socket.id);

  socket.on("joinRoom" , (data)=> {
    socket.join(data);
    console.log(`User with id: ${socket.id} joined room: ${data}`);
  })

  socket.on("sendMessage" ,(data)=> {
    socket.to(data.room).emit("rcm" , data);
  });
  socket.on("disconnect" , ()=>{
    console.log("user disconnected", socket.id);
  });
  socket.on("listRoom", function(){
    socket.emit('allRooms', getActiveRooms());
  });
});

server.listen(PORT, ()=>{
console.log('chat server running...')
});


function getActiveRooms() {
  // Convert map into 2D list:
  // ==> [['4ziBKG9XFS06NdtVAAAH', Set(1)], ['room1', Set(2)], ...]
  const arr = Array.from(io.sockets.adapter.rooms);
  // Filter rooms whose name exist in set:
  // ==> [['room1', Set(2)], ['room2', Set(2)]]
  const filtered = arr.filter(room => !room[1].has(room[0]))
  // Return only the room name: 
  // ==> ['room1', 'room2']
  const res = filtered.map(i => i[0]);
  return res;
}