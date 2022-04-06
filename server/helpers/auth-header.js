import {authenticationService} from "../services/authentication.service";
import {useState} from "react";

export function authHeader() {
    // Can rerender by creating a function with setState in main component like App or RegisteredUser
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    const token = authenticationService.tokenValue;
    console.log(token);
    if (currentUser && token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}
