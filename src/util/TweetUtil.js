import moment from 'moment';

export const ValidateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(pattern)) {
        return true;
    }
    else {
        return false;
    }
}

export const ValidatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(pattern)) {
        return true;
    }
    else {
        return false;
    }
}

export const formatDate = (time) => {
    var dateAndTime = moment(time).format(`YYYY-MM-DD HH:mm:ss.SSS`);
    return moment(dateAndTime, 'YYYY-MM-DD HH:mm:ss.SSS').fromNow()
}