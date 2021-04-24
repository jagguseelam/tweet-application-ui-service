import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetsContainer from '../../tweets/TweetsContainer';

export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <TweetsContainer />
            </div>
        )
    }
}

Body.propTypes = {
    // isLoggedIn: PropTypes.bool,
};

Body.defaultValues = {
    // isLoggedIn: false
}

export default Body
