import Axios from 'axios';

export const getTweetsInformation = () => {
    return Axios.get(`http://localhost:8021/api/v1.0/tweets/all`)
}

export const getUserTweetsInformation = (loginId) => {
    return Axios.get(`http://localhost:8021/api/v1.0/tweets/user/` + loginId)
}

export const replyToTweet = (body) => {
    return Axios.put(`http://localhost:8021/api/v1.0/tweets/user/reply`, body)
}

export const likeTheTweet = ({ tweetId, loginId }) => {
    return Axios.put(`http://localhost:8021/api/v1.0/tweets/user/like/` + tweetId + '/' + loginId)
}

export const postTweet = (body) => {
    return Axios.post(`http://localhost:8021/api/v1.0/tweets/user/add`, body)
}

