import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

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
};

export default createStore(rootReducer, initialState, composedEnhancer);
