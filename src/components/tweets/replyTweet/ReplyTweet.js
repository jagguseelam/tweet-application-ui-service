import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TweetApi from '../../../api/tweet/TweetApi';

import './ReplyTweet.css';

class ReplyTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
        }
    }

    onClickReplyTweetHandler = () => {
        const { loginId } = this.props.userDetails;
        const { description } = this.state;
        let body = {
            description: description,
            postedBy: loginId,
            tweetId: this.props.tweetId
        }
        TweetApi.replyToTweet(body).then((res) => {
            this.props.reloadParent();
        });
    }

    onChangeReplyTweetHandler = (e) => {
        this.setState({ description: e.target.value })
    }

    render() {
        return (
            <div className='reply-tweet-container'>
                <textarea className="reply-tweet-text-area" placeholder="do you wanna reply..?" rows="2" required onChange={(e) => this.onChangeReplyTweetHandler(e)}></textarea>
                <button className="reply-tweet-button" onClick={this.onClickReplyTweetHandler}>
                    {"Post"}
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(ReplyTweet);
