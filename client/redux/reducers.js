import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      state.currentUser = action.payload;
    default:
      return state;
  }
};

export default userReducer;
