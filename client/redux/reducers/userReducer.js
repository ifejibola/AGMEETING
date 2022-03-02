const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      state.currentUser = action.payload;
      break;
    case "CREATE_ACCOUNT":
      console.log("create account emitted");
      break;
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
      break;
    case "LOGIN_SUCCESS":
      console.log("logged in");
      return {
        ...state,
        currentUser: { id: action.payload.id, email: action.payload.email },
        loading: false,
      };
      break;
    case "LOGIN_FAILURE":
      console.log("failed");
      return { ...state, loading: false };
      break;
    case "CREATE_ACCOUNT_REQUEST":
      return { ...state, loading: true };
      break;
    case "CREATE_ACCOUNT_SUCCESS":
      console.log("logged in, account created");
      return {
        ...state,
        currentUser: { id: action.payload.id, email: action.payload.email },
        loading: false,
      };
      break;
    case "CREATE_ACCOUNT_FAILURE":
      console.log("failed");
      return { ...state, loading: false };
      break;
    default:
      return state;
  }
};

export default userReducer;
