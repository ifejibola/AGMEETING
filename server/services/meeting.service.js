import {authHeader} from "../helpers/auth-header";
import axios from "axios";

export const meetingService = {
    getAll,
    getByUserId,
};

async function getAll() {
    let meetings = [];
    await axios.get("http://localhost:3000/api/v1/meetings", {
        headers: authHeader()
    }).then(meetingsList => {

        meetings.push(...meetingsList.data.meetings);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return meetings;
}

async function getByUserId(id) {
    let meetings = [];
    await axios.get("http://localhost:3000/api/v1/meetings/user/" + id, {
        headers: authHeader()
    }).then(meetingsList => {
        meetings.push(...meetingsList.data.meetings);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return meetings;
}