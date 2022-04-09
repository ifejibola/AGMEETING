import {
  GET_MEETING_ITEMS_FAILURE,
  GET_MEETING_ITEMS_SUCCESS,
  GET_MEETING_ITEMS_REQUEST,
} from "../itemTypes";

//Reducer for items (files etc...)
const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MEETING_ITEMS_REQUEST:
      return { ...state, loading: true };
    case GET_MEETING_ITEMS_SUCCESS:
      return { ...state, meetingItems: action.payload, loading: false };
    case GET_MEETING_ITEMS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default itemReducer;
