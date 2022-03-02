import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
