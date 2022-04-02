import React, { useEffect, useState } from 'react'

const Chat = ({socket, room ,userName }) => {

    const[currentMessage, setCurrentMessage] = useState("")
    const sendMessage= async()=> {
        if(currentMessage!= "")
        {
           const messageData = {
                room: room,
                author: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            await socket.emit("sendMessage", messageData);
        }
    };

    useEffect(() =>{
        socket.on("rcm", (data)=> {
            alert('message sent')
        })
     }, {socket});

  return (
    <div>
        <div className='chatHeader'></div>
        <div className='chatBody'></div>
        <div className='chatFooter'>
            <input type="text"  onChange={(event) => setCurrentMessage(event.target.value)}/>
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat
