import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Welcome.css'
export class Welcome extends Component {
    render() {
        const { firstName, lastName } = this.props.userDetails;
        return (
            <div className="welcome-container">
                {'Welcome back ' + firstName + " " + lastName}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(Welcome);
