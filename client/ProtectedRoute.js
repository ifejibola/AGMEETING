import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { baseURL, verifyToken } from "./actions";
import axios from "axios";
import jwtDecode from "jwt-decode";

function ProtectedRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const validateToken = async () => {
      let accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        setIsAuthenticated(false);
        return () => {
          isAuthenticated;
        };
      }
      accessToken = jwtDecode(accessToken);
      const req = axios
        .get(baseURL + "/authentication/verifyToken", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          if (data !== "success") {
            localStorage.removeItem("access_token");
            localStorage.setItem("is_authenticated", false);
            setIsAuthenticated(false);
            return () => {
              isAuthenticated;
            };
          } else {
            localStorage.setItem("is_authenticated", true);
            setIsAuthenticated(true);
            return () => {
              isAuthenticated;
            };
          }
        })
        .catch((err) => {
          // let refreshToken = localStorage.getItem("refresh_token");
          // if(!refreshToken){
          //   setIsAuthenticated(false);
          //   return () => {
          //     isAuthenticated;
          //   };
          // }
          // const req = axios
          // .post(baseURL + "/authentication/refreshToken", { user: accessToken.user.id, refreshToken: refreshToken}).then((data)=>{
          //   console.log(data)
          // }).catch((err)=>{
          //   setIsAuthenticated(false);
          //   return () => {
          //     isAuthenticated;
          //   };
          // })
        });
    };
    return validateToken();
  }, []);

  if (isAuthenticated === null) {
    return "Loading...";
  }
  return isAuthenticated ? props.children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.currentUser?.id,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
