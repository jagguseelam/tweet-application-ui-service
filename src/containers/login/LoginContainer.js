import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../../components/login/LoginComponent';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { loggedInDetails} = this.props;
        return (
            <LoginComponent loggedInDetails={loggedInDetails} goBackHandler={this.props.goBackHandler} />
        );
    }
}

LoginContainer.propTypes = {
    loggedInDetails: PropTypes.func,
};

LoginContainer.defaultValues = {

}

export default LoginContainer;