
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfilePicture from '../profilePic/ProfilePicture';
import Time from '../time/Time';
import NameWithUserName from '../nameWithUserName/NameWithUserName';
import Message from '../message/Message';
import CommentButton from '../buttons/commentButton/CommentButton';
import LikeButton from '../buttons/likeButton/LikeButton';
import ShareButton from '../buttons/shareButton/ShareButton';
import RetweetButton from '../buttons/retweetButton/RetweetButton';

import './TweetComponent.css';

class TweetComponent extends Component {

    render() {
        return (
            <div className='tweet-container'>
                <div className='tweet-card'>
                    <ProfilePicture />
                    <div className="content">
                        <NameWithUserName /> <Time />
                        <Message />
                        <div className="button">
                            <CommentButton />
                            <RetweetButton />
                            <LikeButton />
                            <ShareButton />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default TweetComponent;
