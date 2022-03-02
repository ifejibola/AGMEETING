import axios from "axios";
import store from "../redux/store";

const baseURL = "http://localhost:3000";

export const createAccount = (email, password) => {
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

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    axios
      .post(baseURL + "/authentication/login", {
        email,
        password,
      })
      .then(({ data }) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        console.log("the data", data);
        if (data !== "No user") {
          localStorage.setItem("isAuthenticated", true);
          return;
        } else {
          localStorage.removeItem("isAuthenticated");
        }
      })
      .catch((err) => {
        dispatch("LOGIN_FAILURE");
        localStorage.removeItem("isAuthenticated");
      });
  };
};
