// https://medium.com/swlh/build-a-real-time-chat-app-with-react-hooks-and-socket-io-4859c9afecb0
// https://github.com/pixochi/socket.io-react-hooks-chat

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { baseURL } from "../actions";

//Custom hook for chat functionality, see ContentMessage component

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();

  const getMessages = async (roomId) => {
    axios
      .get(baseURL + "/chat/roomMessages", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((data) => {
        setMessages(data.data);
      });
  };

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    getMessages();

    // Listens for incoming messagess
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      getMessages();
      const incomingMessage = {
        ...message,
        // ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody, userId, meetingId, moderatorId) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      content: messageBody,
      user_id: userId,
      moderator_id: moderatorId,
      meeting_id: meetingId,
    });
    getMessages();
  };

  return { messages, sendMessage };
};

export default useChat;
