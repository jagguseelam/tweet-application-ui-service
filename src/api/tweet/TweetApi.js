import Axios from 'axios';

const baseUrl = "http://18.224.171.58:8021/api/v1.0/tweets";

export const getTweetsInformation = () => {
    return Axios.get(`${baseUrl}/all`)
}

export const getUserTweetsInformation = (email) => {
    return Axios.get(`${baseUrl}/user/` + email)
}

export const replyToTweet = (body) => {
    return Axios.put(`${baseUrl}/user/reply`, body)
}

export const likeTheTweet = ({ tweetId, loginId }) => {
    return Axios.put(`${baseUrl}/user/like/` + tweetId + '/' + loginId)
}

export const postTweet = (body) => {
    return Axios.post(`${baseUrl}/user/add`, body)
}

