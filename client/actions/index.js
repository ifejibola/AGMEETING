import axios from "axios";
import { useDispatch } from "react-redux";

const baseURL = "http://localhost:3000";

// const dispatch = useDispatch();

export const createAccount = (email, password) => {
  const req = axios.post(baseURL + "/authentication/register", {
    email,
    password,
  });
  return (dispatch) => {
    req.then(({ data }) => {
      console.log(data);
      dispatch({ type: "CREATE ACCOUNT", payload: data });
    });
  };
};

export const login = (email, password) => {
  const req = axios.post(baseURL + "/authentication/login", {
    email,
    password,
  });
  return (dispatch) => {
    req.then(({ data }) => {
      console.log(data);
      dispatch({ type: "LOGIN", payload: data });
    });
  };
};
