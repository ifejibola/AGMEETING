import {authHeader} from "../helpers/auth-header";
import { handleResponse } from '../helpers/handle-response';

export const userService = {
    getAllAgenda,
    getAgendaById
};

function getAllAgenda() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/agenda`, requestOptions).then(handleResponse);
}

function getAgendaById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`/agenda/${id}`, requestOptions).then(handleResponse);
}