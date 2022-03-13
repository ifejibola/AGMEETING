import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verifyToken } from "./actions";

function ProtectedRoute({ children }) {
  const is_authenticated = localStorage.getItem("is_authenticated");

  // useEffect(async ()=>{
  //   await verifyToken();
  // }, [])

  return is_authenticated ? children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
