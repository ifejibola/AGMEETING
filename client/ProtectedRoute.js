import React from "react";
import {Navigate} from "react-router-dom";
import {connect, useSelector} from "react-redux";

function ProtectedRoute({children}) {
    const {user} = useSelector((state) => state.auth);
    return user ? children : <Navigate to="/login"/>;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
