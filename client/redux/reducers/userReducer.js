const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER":
      state.currentUser = action.payload;
      break;
    case "CREATE_ACCOUNT":
      break;
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
      break;
    case "LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: { id: action.payload.id, email: action.payload.email },
        loading: false,
      };
      break;
    case "LOGIN_FAILURE":
      return { ...state, loading: false };
      break;
    case "CREATE_ACCOUNT_REQUEST":
      return { ...state, loading: true };
      break;
    case "CREATE_ACCOUNT_SUCCESS":
      return {
        ...state,
        currentUser: { id: action.payload.id, email: action.payload.email },
        loading: false,
      };
      break;
    case "CREATE_ACCOUNT_FAILURE":
      return { ...state, loading: false };
      break;
    default:
      return state;
  }
};

export default userReducer;
