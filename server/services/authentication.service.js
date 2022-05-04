
import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/handle-response';
import axios from "axios";


const user = localStorage.getItem('currentUser');
let currentUserSubject;
let tokenSubject;
// BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable
// We use BehaviorSubject because it needs an initial value
// Observable is a feature that provides support for delivering messages between different parts of your single-page application,
// Observable responsible for handling multiple values, asynchronous programming
if (user === "undefined"){
    currentUserSubject = new BehaviorSubject();
    tokenSubject = new BehaviorSubject();
}
else{
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    tokenSubject = new BehaviorSubject(localStorage.getItem('token'));
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(), // The purpose of this is to prevent leaking the "observer side" of the Subject out of an API
    token: tokenSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    get tokenValue () { return tokenSubject.value }
};

async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return await axios.post("http://localhost:3000/api/v1/login", {email, password})
        .then(handleResponse)
        .then(response => {
            // store user details and jwt token in local storage to keep user logged in between page refresh
            const user = response.data['user'];
            const jwtToken = response.data['token'];
            console.log(jwtToken);
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', jwtToken);
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    currentUserSubject.next(null);
    tokenSubject.next(null);
}