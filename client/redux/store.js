import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

//Redux store setup, adding the thunk middleware for async functionality and the redux devtools chrome extionsion support
const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {
  currentUser: {
    id: "",
    email: "",
    is_mod: "",
    moderator_id: "",
  },
  meetingParticipants: [],
  meetingItems: [],
};

export default createStore(rootReducer, initialState, composedEnhancer);
