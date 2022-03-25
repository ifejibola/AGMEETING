import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import React from "react";
import { useState } from "react";
//import {Grid} from '@material-ui/core';
import { Link as RouterLink, useLocation } from "react-router-dom";
import useChat from "./useChat";
// import "./ChatRoom.css";

// Soket.io code from https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0
// https://github.com/pixochi/socket.io-react-hooks-chat

var textHolder = "";

const defaultValues = {
  outText: "",
  inText: "",
};

const ContentMessage = () => {
  const { roomId } = 1;
  const { messages, sendMessage } = useChat(1); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message) => (
            <li>{message.body}</li>
          ))}
        </ol>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ContentMessage;
