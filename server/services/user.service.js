import {authHeader} from "../helpers/auth-header";
import { handleResponse } from '../helpers/handle-response';

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function getRoleById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function addUser(email, name, password){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/add-users`, requestOptions).then(handleResponse);

}