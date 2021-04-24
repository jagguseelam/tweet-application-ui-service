

import './NameWithUserName.css';

const NameWithUserName = () => {
    return (
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

export default NameWithUserName;