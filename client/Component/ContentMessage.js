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
import { connect } from "react-redux";
// import "./ChatRoom.css";

// Soket.io code from https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0
// https://github.com/pixochi/socket.io-react-hooks-chat

const ContentMessage = (props) => {
  const { roomId } = 1;
  const { messages, sendMessage } = useChat(props.user.moderator_id); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, props.user.id, null, props.user.moderator_id);
    setNewMessage("");
  };

  console.log(messages);
  var test = messages.map((message) => message.content + "\n").join("");

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            disabled
            multiline
            rows={15}
            size="large"
            fullWidth
            label=""
            variant="outlined"
            value={test}
            sx={{
              Height: "100%",
            }}
          />
          {/* <ol className="messages-list">
            {messages.map((message) => (
            <li>{message.body}</li>
            ))}
            </ol>} */}
        </Grid>
        <Grid item xs={12}>
          {/* <TextField
              label=""
              placeholder="Message"
              fullWidth
              variant="outlined"
              onChange={setInText}
              value={text.inText}
            /> */}

          <TextField
            placeholder="Write message..."
            className="new-message-input-field"
            label=""
            fullWidth
            variant="outlined"
            onChange={handleNewMessageChange}
            value={newMessage}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{}} fullWidth>
            <InputLabel id="input">Destination</InputLabel>
            <Select
              labelId="inputlab"
              id="sel"
              //value={destination}
              label="Destination"
              //onChange={handleChange}
            >
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
          >
            Attachment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleSendMessage} //handleClick
          >
            Post Message
          </Button>
        </Grid>
      </Grid>
    </Box>
    // <div className="messages-container">
    //   <ol className="messages-list">
    //     {messages.map((message) => (
    //       <li>{message.body}</li>
    //     ))}
    //   </ol>
    // </div>
    // <br></br>
    // <br></br>
    // <br></br>
    // <br></br>
    // <textarea
    //   value={newMessage}
    //   onChange={handleNewMessageChange}
    //   placeholder="Write message..."
    //   className="new-message-input-field"
    // />
    // <button onClick={handleSendMessage} className="send-message-button">
    //   Send
    // </button>
    // </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(ContentMessage);
