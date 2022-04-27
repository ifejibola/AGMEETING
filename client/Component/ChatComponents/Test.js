import io from 'socket.io-client'
import "./App.css"
const socket = io.connect("http://localhost:5000");
import Chat from './Chat';
import React, { useState, useEffect } from 'react'
import { authenticationService } from '../../../server/services/authentication.service';
import {
  Typography
} from "@mui/material";

const Test = () => {
    const[username , setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const currentUser = authenticationService.currentUserValue;
    const userRole = currentUser?.role;
    const [roomList, setRoomList] = useState([]);
    
    async function getRooms(){
      await socket.emit("listRoom");
    }
    
    const createRoom = ()=> {
        if(room!="")
        {
            socket.emit("joinRoom", room)
            setShowChat(true);
        }
    }

    function joinRoom(room){
      if(room!="")
        {
            socket.emit("joinRoom", room)
            setShowChat(true);
        }
    }
    useEffect(() =>{
      getRooms();
      socket.on("allRooms", (room)=> {
        //setRoomList((list) => [...list, room]);
        setRoomList(room);
      });
      return () => socket.off("allRooms", room);
    }, {socket});


    return (
      userRole === "admin" || userRole === "moderator" ?
      
      <div className="App">
        {!showChat ? (
          <>
          <div className="joinChatContainer">
            <h3>Create A Chatroom</h3>
            {/* <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            /> */}
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={createRoom}>Create</button>
          </div>
          <div className="joinChatContainer">
          <h5>Current available chatrooms</h5>
              <table>
                <tbody>
                {roomList.length===0 ? 'No room available!': roomList.map((room)=>(
                  <tr>
                    <td><Typography>{room}</Typography></td>
                    <td><button onClick={(e)=>{setRoom(room);joinRoom(room);}}>Join</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
          </div>
          </>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
        
      </div>

      :

      <div className="App">
        {
        !showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chatroom</h3>
            <div>
              <table>
                <tbody>
                {roomList.length===0 ? 'No room available!': roomList.map((room)=>(
                  <tr>
                    <td><Typography>{room}</Typography></td>
                    <td><button onClick={(e)=>{setRoom(room);joinRoom(room);}}>Join</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button> */}
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
      
    );
}

export default Test
