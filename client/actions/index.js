import axios from "axios";
import store from "../redux/store";
import { history } from "../Helpers/history";
import jwtDecode from "jwt-decode";
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
  GET_MEETING_PARTICIPANTS_SUCCESS,
  GET_MEETING_PARTICIPANTS_FAILURE,
  GET_MEETING_PARTICIPANTS_REQUEST,
} from "../redux/userTypes";

import {
  GET_MEETING_ITEMS_SUCCESS,
  GET_MEETING_ITEMS_FAILURE,
  GET_MEETING_ITEMS_REQUEST,
} from "../redux/itemTypes";

export const baseURL = "http://localhost:3000";

//Redux action creators

export const setCurrentUser = (userInfo) => {
  return async (dispatch) => {
    dispatch({ type: SET_USER_INFO, payload: userInfo });
  };
};

export const createAccount = (email, password, callback) => {
  return async (dispatch, getState) => {
    dispatch({ type: "CREATE_ACCOUNT_REQUEST" });
    const req = axios
      .post(baseURL + "/authentication/register", {
        email,
        password,
      })
      .then(({ data }) => {
        dispatch({ type: "CREATE_ACCOUNT_SUCCESS", payload: data });
        if (data !== "failure") {
          localStorage.setItem("is_authenticated", true);
          localStorage.setItem("access_token", data.accessToken);
          localStorage.setItem("refresh_token", data.refreshToken);
          //calls the function that calls the navigate function from the useNavigation hook in the signup component
          callback();
          return;
        } else {
          localStorage.removeItem("is_authenticated");
        }
      })
      .catch((err) => {
        dispatch({ type: "CREATE_ACCOUNT_FAILURE" });
        localStorage.removeItem("is_authenticated");
      });
  };
};

export const login = (email, password, callback) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(baseURL + "/authentication/login", {
        email,
        password,
      })
      .then(({ data }) => {
        if (data !== "No user") {
          localStorage.setItem("access_token", data.accessToken);
          localStorage.setItem("refresh_token", data.refreshToken);
          localStorage.setItem("is_authenticated", true);
          const accessToken = jwtDecode(data.accessToken);
          dispatch({ type: LOGIN_SUCCESS, payload: accessToken.user });
          console.log(callback);
          callback("/");
          return;
        } else {
          localStorage.removeItem("acess_token");
          localStorage.removeItem("refresh_token");
          localStorage.setItem("is_authenticated", false);
          return dispatch({ type: LOGIN_FAILURE });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE });
        localStorage.removeItem("acess_token");
        localStorage.removeItem("refresh_token");
      });
  };
};

export const getMeetingParticipants = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MEETING_PARTICIPANTS_REQUEST });
    axios
      .get(baseURL + "/participants/meetingParticipants", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch({ type: GET_MEETING_PARTICIPANTS_SUCCESS, payload: data });
        return;
      })
      .catch((err) => {
        dispatch({ type: GET_MEETING_PARTICIPANTS_FAILURE });
      });
  };
};

export const getMeetingItems = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MEETING_ITEMS_REQUEST });
    axios
      .get(baseURL + "/items/getMeetingItems", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        dispatch({ type: GET_MEETING_ITEMS_SUCCESS, payload: data });
        return;
      })
      .catch((err) => {
        dispatch({ type: GET_MEETING_ITEMS_FAILURE });
      });
  };
};
