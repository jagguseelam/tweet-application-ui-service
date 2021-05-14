import '../TweetButton.css';

const LikeButton = (props) => {
    return (
        <span>{props.count}<i className="fa fa-heart like-button" onClick={() => props.onClickLikeButton()} /></span>
    )
}

export default LikeButton;