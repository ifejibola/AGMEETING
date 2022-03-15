import { BehaviorSubject } from 'rxjs';

import { handleResponse } from '../helpers/handle-response';
import axios from "axios";


const user = localStorage.getItem('currentUser');
let currentUserSubject;
if (user === "undefined"){
    currentUserSubject = new BehaviorSubject();
}
else{
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return axios.post("http://localhost:3000/api/v1/login", {email, password})
        .then(handleResponse)
        .then(response => {
            // store user details and jwt token in local storage to keep user logged in between page refresh
            const user = response.data['user']
            const jwtToken = response.data['token']

            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });

    // return fetch(`/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         currentUserSubject.next(user);
    //
    //         return user;
    //     });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}