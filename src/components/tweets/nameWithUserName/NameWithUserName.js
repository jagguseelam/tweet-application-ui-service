

import './NameWithUserName.css';

const NameWithUserName = (props) => {
    return (
        <span className="name-with-handle">
            <span className="name">{props.name}</span>
            <span className="handle">{'@' + props.postedBy}</span>
        </span>
    );
}

export default NameWithUserName;