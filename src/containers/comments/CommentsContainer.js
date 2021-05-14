import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CommentComponent from '../../components/comments/CommentComponent';

import './CommentsContainer.css';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    getComments = () => {
        const { comments } = this.props;
        if (comments != null && comments.length > 0) {
            return comments.map((comment) => {
                return (
                    <CommentComponent
                        author={comment.postedBy}
                        description={comment.description}
                        key={comment.postedBy + comment.description} />
                );
            });
        }
    }

    render() {
        const comments = this.getComments();
        return (
            <div className="comments-container">
                <div className="comment-list">{comments}</div>
            </div>
        );
    }
}

CommentsContainer.propTypes = {
    comments: PropTypes.array,
    userDetails: PropTypes.object
};

CommentsContainer.defaultValues = {
    comments: [],
    userDetails: {}
}

const mapStateToProps = state => {
    return {
        userDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, null)(CommentsContainer);