import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TweetsContainer.css';
import TweetComponent from '../../components/tweets/tweetComponent/TweetComponent';
const DATA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
class TweetsContainer extends Component {

    render() {
        return (
            <div className={'tweets-container'}>
                {DATA.map((e) => {
                   return <TweetComponent />
                })}
            </div>
        )
    }
}

export default TweetsContainer
