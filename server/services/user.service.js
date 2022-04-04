import {authHeader} from "../helpers/auth-header";
import { handleResponse } from '../helpers/handle-response';
import axios from "axios";

export const userService = {
    getAll,
    getById,
    updateById
};

async function getAll() {
    let customers = [];
    await axios.get("http://localhost:3000/api/v1/users", {
        headers: authHeader()
    }).then(customersList => {
        customers.push(...customersList.data.users);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return customers;
}

async function getById(id) {
    let customers = [];
    await axios.get("http://localhost:3000/api/v1/users/"+id, {
        headers: authHeader()
    }).then(customersList => {
        customers.push(...customersList.data.users);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return customers;
}

async function updateById(id) {
    let customers = [];
    await axios.get("http://localhost:3000/api/v1/users/"+id, {
        headers: authHeader()
    }).then(customersList => {
        customers.push(...customersList.data.users);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return customers;
}