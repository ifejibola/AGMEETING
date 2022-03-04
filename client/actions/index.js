import axios from "axios";
import store from "../redux/store";
import { history } from "../Helpers/history";

const baseURL = "http://localhost:3000";

export const createAccount = (email, password, callback) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_ACCOUNT_REQUEST" });
    const req = axios
      .post(baseURL + "/authentication/register", {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: "CREATE_ACCOUNT_SUCCESS", payload: data });
        if (data !== "failure") {
          localStorage.setItem("isAuthenticated", true);
          //calls the function that calls the navigate function from the useNavigation hook in the signup component
          callback();
          return;
        } else {
          localStorage.removeItem("isAuthenticated");
        }
      })
      .catch((err) => {
        dispatch({ type: "CREATE_ACCOUNT_FAILURE" });
        localStorage.removeItem("isAuthenticated");
      });
  };
};

export const login = (email, password, callback) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    axios
      .post(baseURL + "/authentication/login", {
        email,
        password,
      })
      .then(({ data }) => {
        console.log("the data", data);
        if (data !== "No user") {
          localStorage.setItem("isAuthenticated", true);
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
          callback();
          return;
        } else {
          localStorage.removeItem("isAuthenticated");
          return dispatch({ type: "LOGIN_SUCCESS", payload: data });
        }
      })
      .catch((err) => {
        dispatch("LOGIN_FAILURE");
        localStorage.removeItem("isAuthenticated");
      });
  };
};
