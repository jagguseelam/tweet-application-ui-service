
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfilePicture from '../profilePic/ProfilePicture';
import Time from '../time/Time';
import NameWithUserName from '../nameWithUserName/NameWithUserName';
import Message from '../message/Message';
import CommentButton from '../buttons/commentButton/CommentButton';
import LikeButton from '../buttons/likeButton/LikeButton';
import * as TweetUtil from '../../../util/TweetUtil';
import * as TweetApi from '../../../api/tweet/TweetApi';
import CommentsContainer from '../../../containers/comments/CommentsContainer';
import { connect } from 'react-redux';

import './TweetComponent.css';
import PostTweet from '../postTweet/PostTweet';
import ReplyTweet from '../replyTweet/ReplyTweet';

class TweetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentSelected: false,
        }
    }

    onClickCommentForTweetHandler = () => {
        this.setState({ isCommentSelected: !this.state.isCommentSelected })
    }

    onClickLikeForTweetHandler = (tweetId) => {
        const { userDetails } = this.props;
        const { loginId } = userDetails;
        TweetApi.likeTheTweet({ tweetId, loginId }).then((res) => {
            this.props.reloadParent();
        });
    }

    getNumberOfCommentsAndLikes = (option) => {
        const { likes = [], comments = [] } = this.props.tweetInfo;
        let options = [];
        if (option === 'likes') {
            options = this.props.tweetInfo?.likes || [];
        }

        if (option === 'comments') {
            options = this.props.tweetInfo?.comments || [];
        }

        if (options != null && options.length > 0) {
            return options.length;
        } else {
            return "0";
        }
    }

    render() {
        const { tweetInfo } = this.props;
        const { description = '', name = "No Name", postedBy = '', postedTime = '', id = '', comments, likes = [] } = tweetInfo;
        const { isCommentSelected } = this.state;

        return (
            <div className='tweet-container'>
                <div className='tweet-card'>
                    <ProfilePicture />
                    <div className="content">
                        <NameWithUserName postedBy={postedBy} name={name} /> <Time dateAndTime={TweetUtil.formatDate(postedTime)} />
                        <Message message={description} />
                        <div className="button">
                            <CommentButton count={this.getNumberOfCommentsAndLikes('comments')} onClickCommentButton={this.onClickCommentForTweetHandler} />
                            <LikeButton count={this.getNumberOfCommentsAndLikes('likes')} onClickLikeButton={() => this.onClickLikeForTweetHandler(id)} />
                        </div>
                        <ReplyTweet reloadParent={this.props.reloadParent} tweetId={id} />
                        <CommentsContainer comments={comments} />
                    </div>
                </div>
            </div>
        )
    }
}

TweetComponent.propTypes = {
    tweetsInformation: PropTypes.object,
};

TweetComponent.defaultValues = {
    tweetsInformation: {}
}


const mapStateToProps = state => {
    return {
        userDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(TweetComponent);