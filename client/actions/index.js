import axios from "axios";
import { useDispatch } from "react-redux";

const baseURL = "http://localhost:3000";

const dispatch = useDispatch();

export const createAccount = () => {
  const req = axios.get(baseURl + "/participants");
  return (dispatch) => {
    req.then(({ data }) => {
      console.log(data);
      dispatch({ type: "CREATE ACCOUNT", payload: data });
    });
  };
};
