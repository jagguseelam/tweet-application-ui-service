import React from 'react';
import PropTypes from 'prop-types';
import './CommentComponent.css';

class CommentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-body">{this.props.description + ' -@' + this.props.author}</div>
            </div>
        );
    }

}

CommentComponent.propTypes = {
    description: PropTypes.string,
    author: PropTypes.string
};

CommentComponent.defaultValues = {
    description: '',
    author:'',
}

export default CommentComponent;