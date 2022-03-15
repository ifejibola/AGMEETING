import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

function ProtectedRoute({children}) {
    const user = localStorage.getItem('currentUser');
    return user ? children : <Navigate to="/login"/>;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
