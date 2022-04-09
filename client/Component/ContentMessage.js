import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  List,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
//import {Grid} from '@material-ui/core';
import { Link as RouterLink, useLocation } from "react-router-dom";
import useChat from "./useChat";
import { connect } from "react-redux";

// Soket.io code from https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0
// https://github.com/pixochi/socket.io-react-hooks-chat

const ContentMessage = (props) => {
  const lastMessageRef = useRef(null);
  const messageContainerRef = useRef(null);
  const { roomId } = 1;
  const { messages, sendMessage } = useChat(props.user.moderator_id); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  //called when a message is sent
  const handleSendMessage = () => {
    if (newMessage !== "") {
      sendMessage(newMessage, props.user.id, null, props.user.moderator_id);
      setNewMessage("");
    } else {
      setNewMessage("");
      return;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper
            ref={messageContainerRef}
            style={{
              maxHeight: 300,
              minHeight: 300,
              overflow: "auto",
              background: "none",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <List>
              {messages.map((message, i) => {
                return message.participant?.id == props.user.id ? (
                  i == messages.length - 1 ? (
                    <div
                      id="lastMessage"
                      ref={lastMessageRef}
                      style={{
                        background: "#5664d2",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography>
                        {message.participant?.email + ":"}
                      </Typography>
                      <Typography>{message.content}</Typography>
                      <br />
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#5664d2",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography>
                        {message.participant?.email + ":"}
                      </Typography>
                      <Typography>{message.content}</Typography>
                      <br />
                    </div>
                  )
                ) : i == messages.length - 1 ? (
                  <div
                    id="lastMessage"
                    ref={lastMessageRef}
                    style={{
                      background: "grey",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography>{message.participant?.email + ":"}</Typography>
                    <Typography>{message.content}</Typography>
                    <br />
                  </div>
                ) : (
                  <div
                    style={{
                      background: "grey",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography>{message.participant?.email + ":"}</Typography>
                    <Typography>{message.content}</Typography>
                    <br />
                  </div>
                );
              })}
            </List>
          </Paper>
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
              defaultValue={""}
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
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(ContentMessage);
