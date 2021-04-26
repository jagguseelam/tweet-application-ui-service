import React, { Component } from 'react';
import { connect } from 'react-redux';

import './NotificationContainer.css'

class NotificationContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const notifications = this.props.userDetails?.notifications || [];
        return (
            <div className="notification-container">
                {notifications && notifications.length > 0 && notifications.map((notification, i) => {
                    return (
                        <div key={notification + i} className="notification">{notification}</div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(NotificationContainer);