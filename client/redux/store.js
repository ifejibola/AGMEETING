import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
);

const initialState = {
  currentUser: {
    username: "",
  },
};

export default createStore(userReducer, initialState, composedEnhancer);
