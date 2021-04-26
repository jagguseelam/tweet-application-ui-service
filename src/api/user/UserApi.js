import Axios from 'axios';

export const verifyLoginDetails = ({ email, password }) => {
    return Axios.post(`http://localhost:8021/api/v1.0/tweets/user/login`, { email, password })
}

export const registerUser = ({ email, password, firstName, lastName, loginId, contactNumber }) => {
    return Axios.post(`http://localhost:8021/api/v1.0/tweets/user/register`, { email, password, firstName, lastName, loginId, contactNumber })
}
