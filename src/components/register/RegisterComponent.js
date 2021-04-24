import React, { Component } from 'react';

import InputField from '../inputField/InputField';
import InputError from '../errors/InputError';
import * as TweetUtil from '../../util/TweetUtil';

import './RegisterComponent.css';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            errors: {
                emailError: '',
                passwordError: ''
            }
        };
    }

    onClickRegisterHandler = () => {
        console.log('I pressed Login Button');
    }

    onChangeEmailHandler = (e) => {
        if (e.target.value.length > 5 && TweetUtil.ValidateEmail(e.target.value)) {
            this.setState({
                isEmailValid: true, errors: {
                    ...this.state.errors,
                    emailError: ''
                }
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
                }
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
            <div className="register-container">
                <div className="title">{'Register'}</div>
                <div className="input-fields">
                    <InputField title={'First Name'} type={'text'} name={'firstName'} style={'input-box'} placeholder={'First Name'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
                    <InputField title={'Last Name'} type={'text'} name={'lastName'} style={'input-box'} placeholder={'Last Name'} onChangeHandler={(e) => this.onChangePasswordHandler(e)} />
                    <InputField title={'Email'} type={'email'} name={'username'} style={'input-box'} placeholder={'Email'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
                    <InputField title={'Date of Birth'} type={'number'} name={'dateOfBirth'} style={'input-box'} placeholder={'Date Of Birth'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
                    <InputField title={'Gender'} type={'text'} name={'gender'} style={'input-box'} placeholder={'Gender'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
                    <InputField title={'Password'} type={'password'} name={'password'} style={'input-box'} placeholder={'Password'} onChangeHandler={(e) => this.onChangePasswordHandler(e)} />
                    <InputField title={'Confirm Password'} type={'password'} name={'confirmPassword'} style={'input-box'} placeholder={'Confirm Password'} onChangeHandler={(e) => this.onChangePasswordHandler(e)} />

                </div>
                <div className="register-errors-container">
                    {![''].includes(emailError) && <InputError errorMessage={emailError} />}
                    {![''].includes(passwordError) && <InputError errorMessage={passwordError} />}
                </div>
                <button className="primary-button" onClick={this.onClickRegisterHandler}>{'Register'}</button>
            </div>
        );
    }
}

export default RegisterComponent;