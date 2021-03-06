import React, { Component } from 'react';
import RegisterComponent from '../../components/register/RegisterComponent';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <RegisterComponent registrationDetails={this.props.registrationDetails} goBackHandler={this.props.goBackHandler} />
        );
    }
}

export default RegisterContainer;