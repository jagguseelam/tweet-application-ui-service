import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TweetApi from '../../../api/tweet/TweetApi';

import './PostTweet.css';

class PostTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
        }
    }

    onClickPostTweetHandler = () => {
        const { loginId, firstName, lastName, email } = this.props.userDetails;
        const { description } = this.state;
        let name = firstName + " " + lastName;
        let body = {
            loginId: loginId,
            postedBy: loginId,
            description: description,
            name: name,
            email: email
        }

        TweetApi.postTweet(body).then((res) => {
            this.props.reloadParent();
        });
    }

    onChangePostTweetHandler = (e) => {
        this.setState({ description: e.target.value })
    }

    render() {
        return (
            <div className='post-tweet-container'>
                <textarea className="post-tweet-text-area" placeholder="do you wanna post somethig..?" rows="2" required onChange={(e) => this.onChangePostTweetHandler(e)}></textarea>
                <button className="post-tweet-button" onClick={this.onClickPostTweetHandler}>
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

export default connect(mapStateToProps, null)(PostTweet);
