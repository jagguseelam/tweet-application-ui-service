import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetsContainer from '../../tweets/TweetsContainer';
import Welcome from '../../welcome/Welcome';
import NotificationContainer from '../../notifications/NotificationContainer';

export class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tweetsInformation, selectedOption } = this.props;
        return (
            <div>
                {selectedOption === '' ? <Welcome /> : (selectedOption === 'Notifications' ? <NotificationContainer /> :
                    <TweetsContainer tweetsInformation={tweetsInformation} reloadParent={this.props.reloadParent} selectedOption={selectedOption} />)
                }
            </div>
        )
    }
}

Body.propTypes = {
    selectedOption: PropTypes.string,
    tweetsInformation: PropTypes.array
};

Body.defaultValues = {
    tweetsInformation: []
}

export default Body;
