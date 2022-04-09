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
  GET_MEETING_PARTICIPANTS_FAILURE,
  GET_MEETING_PARTICIPANTS_SUCCESS,
  GET_MEETING_PARTICIPANTS_REQUEST,
} from "../userTypes";

//Reducer for participants (account creation, login, getting meeting users etc...)
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
          is_mod: action.payload.is_mod,
          is_admin: action.payload.is_admin,
          moderator_id: action.payload.moderator_id,
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
          is_mod: action.payload.is_mod,
          is_admin: action.payload.is_admin,
          moderator_id: action.payload.moderator_id,
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
          is_mod: action.payload.is_mod,
          is_admin: action.payload.is_admin,
          moderator_id: action.payload.moderator_id,
        },
        loading: false,
      };
    case GET_MEETING_PARTICIPANTS_REQUEST:
      return { ...state, loading: true };
    case GET_MEETING_PARTICIPANTS_SUCCESS:
      return { ...state, meetingParticipants: action.payload, loading: false };
    case GET_MEETING_PARTICIPANTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
