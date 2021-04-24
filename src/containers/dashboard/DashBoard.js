import React, { Component } from 'react';

import Header from './header/Header';
import Body from './body/Body';
import DefaultBody from './body/default/DefaultBody';
import LoginContainer from '../login/LoginContainer';
import RegisterContainer from '../register/RegisterContainer';
import * as Constants from '../../constants/Constants';

import './DashBoard.css';
import LoginComponent from '../../components/login/LoginComponent';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            toLogin: false,
            toRegister: false
        }
    }

    navigateToLogin = () => {
        this.setState({ toLogin: true, toRegister: false })
    }

    navigateToRegister = () => {
        this.setState({ toRegister: true, toLogin: false })
    }

    render() {
        const { isLoggedIn, toLogin, toRegister } = this.state;

        return (
            <div>
                <Header options={isLoggedIn ? Constants.LOGIN_OPTIONS : []} />
                {!isLoggedIn ? (
                    toLogin ? <LoginContainer /> : (toRegister ? <RegisterContainer /> : <DefaultBody navigateToLogin={this.navigateToLogin} navigateToRegister={this.navigateToRegister} />)
                ) : <Body />}
            </div>
        )
    }
}

export default DashBoard;
