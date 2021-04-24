import React, { Component } from 'react';
import Title from '../../../components/title/Title';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { options } = this.props;
        return (
            <div className='header-container'>
                <Title title={'Tweet'} logo={'public'} />
                <div className='menu-options'>
                    {options.map(e => {
                        return <span>{e}</span>
                    })}
                </div>
            </div>
        )
    }
}

export default Header;