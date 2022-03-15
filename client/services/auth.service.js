import axios from 'axios';

const register = (firstName, lastName, email, password, meetingId, isAdmin, isModerator) => {
    return axios.post('http://localhost:3000/api/users/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        meetingId: meetingId,
        isAdmin: isAdmin,
        isModerator: isModerator
    }, {withCredentials: true});
};

const login = (email, password) => {
    return axios.post('http://localhost:3000/api/users/login', {
        email: email,
        password: password
    }, {withCredentials: true}).then((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        return response.data;
    });
};

const logout = () => {
    axios.get('http://localhost:3000/api/users/logout', {withCredentials: true}).then(() => {
        localStorage.setItem('currentUser', JSON.stringify(null));
    });
};

export default {
    register, login, logout
};

