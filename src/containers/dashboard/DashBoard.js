import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header/Header';
import Body from './body/Body';
import DefaultBody from './body/default/DefaultBody';
import LoginContainer from '../login/LoginContainer';
import RegisterContainer from '../register/RegisterContainer';
import * as Constants from '../../constants/Constants';
import * as TweetApi from '../../api/tweet/TweetApi';
import * as Actions from '../../actions/Actions';
import * as UserApi from '../../api/user/UserApi';

import './DashBoard.css';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            toLogin: false,
            toRegister: false,
            selectedOption: '',
            tweetsInformation: [],
            loggedInUserDetails: {}
        }
    }

    navigateToLogin = () => {
        this.setState({ toLogin: true, toRegister: false })
    }

    navigateToRegister = () => {
        this.setState({ toRegister: true, toLogin: false })
    }

    onSelectMenuOption = async (option) => {
        const { email } = this.state.loggedInUserDetails;
        switch (option) {

            case 'Logout': {
                this.setState({ selectedOption: option, isLoggedIn: false, toLogin: false, tweetsInformation: [], loggedInUserDetails: {} });
            };
                break;

            case 'View Tweets': {
                TweetApi.getTweetsInformation().then((res) => {
                    this.setState({ tweetsInformation: res.data, selectedOption: option });
                });
            }
                break;

            case 'View My Tweets': {
                TweetApi.getUserTweetsInformation(email).then((res) => {
                    this.setState({ tweetsInformation: res.data, selectedOption: option });
                });
            }
                break;

            case 'Notifications': {
                this.setState({ selectedOption: option });
            }
                break;

            case 'Post Tweet': {
                this.setState({ selectedOption: option });
            }
                break;

        }
    }

    getLoggedInUserDetails = ({ email, password }) => {
        UserApi.verifyLoginDetails({ email, password }).then((response) => {
            if (Object.keys(response).length > 0) {
                this.setState({ loggedInUserDetails: response.data, isLoggedIn: true });
                this.props.actions.setLoggedInUserDetails(response.data);
            }
        }).catch(() => { });
    }

    registerUser = ({ email, password, confirmPassword, firstName, lastName, loginId, contactNumber }) => {
        UserApi.registerUser({ email, password, confirmPassword, firstName, lastName, loginId, contactNumber }).then((response) => {
            this.setState({ toLogin: true, toRegister: false });
        }).catch(() => { });
    }

    reloadParent = () => {
        const { selectedOption } = this.state;
        this.onSelectMenuOption(selectedOption);
    }

    goBackHandler = () => {
        this.setState({ toLogin: false, toRegister: false })
    }

    render() {
        const { isLoggedIn, toLogin, toRegister, tweetsInformation, selectedOption } = this.state;

        return (
            <div>
                <Header options={isLoggedIn ? Constants.LOGIN_OPTIONS : []} selectedOption={this.onSelectMenuOption} />
                {!isLoggedIn ? (
                    toLogin ? <LoginContainer forgotPasswordHandler={this.onForgotPasswordHandler} loggedInDetails={this.getLoggedInUserDetails} goBackHandler={this.goBackHandler} /> : (toRegister ? <RegisterContainer goBackHandler={this.goBackHandler} registrationDetails={this.registerUser} /> : <DefaultBody navigateToLogin={this.navigateToLogin} navigateToRegister={this.navigateToRegister} />)
                ) : <Body tweetsInformation={tweetsInformation} reloadParent={this.reloadParent} selectedOption={selectedOption} />}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(DashBoard);
