import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = (props) => {
    return (
        <div className='app-title'>
            <span className="material-icons app-logo">{props.logo}</span>{props.title}
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string
};

export default Title;