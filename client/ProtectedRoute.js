import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { baseURL, verifyToken } from "./actions";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const validateToken = async () => {
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
          console.log(err);
          localStorage.removeItem("access_token");
          localStorage.setItem("is_authenticated", false);
          setIsAuthenticated(false);
          return () => {
            isAuthenticated;
          };
        });
    };
    return validateToken();
  }, []);

  if (isAuthenticated === null) {
    return "Loading...";
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
