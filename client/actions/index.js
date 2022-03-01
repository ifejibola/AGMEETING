import axios from "axios";
import { useDispatch } from "react-redux";
import store from "../redux/store";

const baseURL = "http://localhost:3000";

export const createAccount = (email, password) => {
  const req = axios.post(baseURL + "/authentication/register", {
    email,
    password,
  });
  return (dispatch) => {
    req.then(({ data }) => {
      console.log(data);
      dispatch({ type: "CREATE_ACCOUNT", payload: data });
    });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    axios
      .post(baseURL + "/authentication/login", {
        email,
        password,
      })
      .then(({ data }) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch("LOGIN_FAILURE");
      });
  };
};
