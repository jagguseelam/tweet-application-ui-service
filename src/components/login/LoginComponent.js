import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../inputField/InputField';
import InputError from '../errors/InputError';
import * as TweetUtil from '../../util/TweetUtil';

import './LoginComponent.css';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      email: '',
      password: '',
      errors: {
        emailError: '',
        passwordError: ''
      },
    };
  }

  onClickLoginHandler = () => {
    const { email, password } = this.state;
    this.props.loggedInDetails({ email, password });
  }

  onClickGoBackHandler = () => {
    this.props.goBackHandler();
  }

  onChangeEmailHandler = (e) => {
    if (e.target.value.length > 5 && TweetUtil.ValidateEmail(e.target.value)) {
      this.setState({
        isEmailValid: true, errors: {
          ...this.state.errors,
          emailError: ''
        },
        email: e.target.value
      });
    } else {
      this.setState({
        isEmailValid: false, errors: {
          ...this.state.errors,
          emailError: 'Invalid Email ID'
        }
      });
    }
  }

  onChangePasswordHandler = (e) => {
    if (e.target.value.length > 7 && TweetUtil.ValidatePassword(e.target.value)) {
      this.setState({
        isPasswordValid: true, errors: {
          ...this.state.errors,
          passwordError: ''
        },
        password: e.target.value
      });
    } else {
      this.setState({
        isPasswordValid: false, errors: {
          ...this.state.errors,
          passwordError: 'Invalid Password'
        }
      });
    }
  }

  render() {
    const { errors } = this.state;
    const { emailError, passwordError } = errors;
    return (
      <div className="login-container">
        <div className="title">{'Login'}</div>
        <div className="input-fields">
          <InputField title={'Email'} type={'email'} name={'username'} style={'input-box'} placeholder={'Enter Email'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
          <InputField title={'Password'} type={'password'} name={'password'} style={'input-box'} placeholder={'Enter Password'} onChangeHandler={(e) => this.onChangePasswordHandler(e)} />
        </div>
        <div className="login-errors-container">
          {![''].includes(emailError) && <InputError errorMessage={emailError} />}
          {![''].includes(passwordError) && <InputError errorMessage={passwordError} />}
        </div>
        <div className='button-container'>
          <button className="primary-button" onClick={this.onClickLoginHandler}>{'Login'}</button>
          <button className="primary-button" onClick={this.onClickGoBackHandler}>{'Go Back'}</button>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  loggedInDetails: PropTypes.func,
};

export default LoginComponent;