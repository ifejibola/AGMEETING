import io from 'socket.io-client'
const socket = io.connect("http://localhost:3000");
import Chat from './Chat';
import React, { useState } from 'react'

const Test = () => {
    const[userName , setUserName] = useState("");
    const [room, setRoom] = useState("");

    const joinRoom = ()=> {
        if(userName!= "" && room!="")
        {
            socket.emit("joinRoom", room)
        }
    }
  return (
    <div>
        <h3>Join a chat</h3>
        
        <input type="text" onChange={(event) => setUserName(event.target.value)}/>
        <input type="text" onChange={(event) => setRoom(event.target.value)}/>
        <button onClick={joinRoom}>join</button>
        <Chat socket= {socket} userName= {userName} room = {room}/>
    </div>
  )
}

export default Test
