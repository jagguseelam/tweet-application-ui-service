import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './DefaultBody.css';

export class DefaultBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onClickLoginHandler = () => {
        this.props.navigateToLogin();
    }

    onClickRegisterHandler = () => {
        this.props.navigateToRegister();
    }

    render() {
        return (
            <div>
                <div className='defalut-body-container'>
                    <div className='default-body-title'>
                        {'Welcome to Tweet Application'}
                        <div className='button-container'>
                            <button className="primary-button" onClick={this.onClickLoginHandler}>{'Login'}</button>
                            <button className="primary-button" onClick={this.onClickRegisterHandler}>{'Register'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefaultBody;