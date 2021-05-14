import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweetComponent from '../../components/tweets/tweetComponent/TweetComponent';
import PostTweet from '../../components/tweets/postTweet/PostTweet';

import './TweetsContainer.css';
class TweetsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tweetsInformation = [], selectedOption } = this.props;

        return (
            <div className={'tweets-container'}>
                <PostTweet reloadParent={this.props.reloadParent} />
                {tweetsInformation.length ? (
                    tweetsInformation.map((tweetInfo, i) => {
                        return <TweetComponent key={i} tweetInfo={tweetInfo} reloadParent={this.props.reloadParent} selectedOption={selectedOption} />
                    })
                ) : "No Tweets to Display"}
            </div>
        )
    }
}

TweetsContainer.propTypes = {
    tweetsInformation: PropTypes.array,
};

TweetsContainer.defaultValues = {
    tweetsInformation: []
}

export default TweetsContainer;
