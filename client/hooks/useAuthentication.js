import {useContext} from "react";
import UserContext from "../contexts/UserContext";

const useAuthentication = () => useContext(UserContext);

export default useAuthentication;
