import Axios from 'axios';

const baseUrl = "http://18.224.171.58:8021/api/v1.0/tweets/user";

export const verifyLoginDetails = ({ email, password }) => {
    return Axios.post(`${baseUrl}/login`, { email, password })
}

export const registerUser = ({ email, password, firstName, lastName, loginId, contactNumber }) => {
    return Axios.post(`${baseUrl}/register`, { email, password, firstName, lastName, loginId, contactNumber })
}
