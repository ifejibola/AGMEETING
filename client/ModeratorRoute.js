import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verifyToken } from "./actions";

//"Stricter" protected routes that only allow moderators to access them, wraps moderator components
function ModeratorRoute(props) {
  const [isMod, setIsMod] = useState(null);
  useEffect(() => {
    setIsMod(props.userReducer?.currentUser?.is_mod);
    return () => {
      isMod;
    };
  }, []);
  if (isMod === null) {
    return "Loading...";
  }
  return isMod ? props.children : <Navigate to="/" />;
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(ModeratorRoute);
