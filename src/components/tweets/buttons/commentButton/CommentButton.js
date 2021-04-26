import '../TweetButton.css';
import React from 'react';

const CommentButton = (props) => {
    return (
        <span>
           {props.count}<i className="far fa-comment" onClick={() => props.onClickCommentButton()} />
        </span>
    );
}

export default CommentButton;