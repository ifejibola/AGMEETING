import {
  CREATE_ACCOUNT,
  STORE_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  SET_USER_INFO,
} from "../userTypes";
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_USER:
      state.currentUser = action.payload;
      break;
    case CREATE_ACCOUNT:
      break;
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          email: action.payload.email,
          isMod: action.payload.isMod,
          moderatorId: action.payload.moderatorId,
        },
        loading: false,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false };
    case CREATE_ACCOUNT_REQUEST:
      return { ...state, loading: true };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          email: action.payload.email,
          moderatorId: action.payload.moderatorId,
        },
        loading: false,
      };
    case CREATE_ACCOUNT_FAILURE:
      return { ...state, loading: false };

    case SET_USER_INFO:
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          email: action.payload.email,
          isMod: action.payload.isMod,
          moderatorId: action.payload.moderatorId,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
