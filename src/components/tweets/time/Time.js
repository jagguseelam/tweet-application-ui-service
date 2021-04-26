

import './Time.css';

const Time = (props) => {
    return (
        <span className="time">{props.dateAndTime}</span>
    );
}

export default Time;