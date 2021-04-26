import React, { Component } from 'react';
import Title from '../../../components/title/Title';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "View My Tweets"
        }
    }

    onClickMenuOptionHandler = (option) => {
        this.setState({ selectedOption: option });
        this.props.selectedOption(option);
    }

    render() {
        const { options } = this.props;
        return (
            <div className='header-container'>
                <Title title={'Tweet'} logo={'public'} />
                <div className='menu-options'>
                    {options.map(option => {
                        return <span key={'user-menu' + option} onClick={() => this.onClickMenuOptionHandler(option)}>{option}</span>
                    })}
                </div>
            </div>
        )
    }
}

export default Header;