import React, { Component } from 'react';
import LoginComponent from '../../components/login/LoginComponent';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <LoginComponent />
        );
    }
}

export default LoginContainer;