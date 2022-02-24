import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      state.currentUser = action.payload;
      break;
    case "CREATE_ACCOUNT":
      console.log("create account emitted");
      break;
    case "LOGIN":
      console.log("Login");
      console.log(action.payload);
      break;
    default:
      return state;
  }
};

export default userReducer;
