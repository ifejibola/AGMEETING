import {authenticationService} from "../services/authentication.service";

export function authHeader() {
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