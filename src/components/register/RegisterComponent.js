import React, { Component } from 'react';

import InputField from '../inputField/InputField';
import InputError from '../errors/InputError';
import * as TweetUtil from '../../util/TweetUtil';

import './RegisterComponent.css';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            loginId: '',
            contactNumber: '',
            isEmailValid: false,
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            isFirstNameVaild: false,
            isLastNameVaild: false,
            isUserNameValid: false,
            isContactNumberValid: false,
            errors: {
                emailError: '',
                passwordError: '',
                confirmPasswordError: '',
                firstNameError: '',
                lastNameError: '',
                contactNumberError: '',
                userNameError: '',
            }
        };
    }

    onClickRegisterHandler = () => {
        const { email, isEmailValid,
            password, isPasswordValid,
            confirmPassword, isConfirmPasswordValid,
            firstName, isFirstNameVaild, lastName, isLastNameVaild,
            loginId, isUserNameValid, isContactNumberValid, contactNumber } = this.state;
        if (isEmailValid && isPasswordValid && isConfirmPasswordValid && isFirstNameVaild && isLastNameVaild && isUserNameValid && isContactNumberValid) {
            this.props.registrationDetails({ email, password, confirmPassword, firstName, lastName, loginId, contactNumber });
        }
    }

    onChangeEmailHandler = (e) => {
        if (e.target.value.length > 5 && TweetUtil.ValidateEmail(e.target.value)) {
            this.setState({
                isEmailValid: true, errors: {
                    ...this.state.errors,
                    emailError: ''
                },
                email: e.target.value,
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

    onChangeConfirmPasswordHandler = (e) => {
        if (e.target.value.length > 7 && TweetUtil.ValidatePassword(e.target.value)) {
            this.setState({
                isConfirmPasswordValid: true, errors: {
                    ...this.state.errors,
                    confirmPasswordError: ''
                },
                confirmPassword: e.target.value
            });
        } else {
            this.setState({
                isConfirmPasswordValid: false, errors: {
                    ...this.state.errors,
                    confirmPasswordError: 'Password Not Matched'
                }
            });
        }
    }

    onChangeFirstNameHandler = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                isFirstNameVaild: true, errors: {
                    ...this.state.errors,
                    firstNameError: ''
                },
                firstName: e.target.value
            });
        } else {
            this.setState({
                isFirstNameVaild: false, errors: {
                    ...this.state.errors,
                    firstNameError: 'Invalid First Name'
                }
            });
        }
    }

    onChangeLastNameHandler = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                isLastNameVaild: true, errors: {
                    ...this.state.errors,
                    lastNameError: ''
                },
                lastName: e.target.value
            });
        } else {
            this.setState({
                isLastNameVaild: false, errors: {
                    ...this.state.errors,
                    lastNameError: 'Invalid Last Name'
                }
            });
        }
    }

    onChangeUsernameHandler = (e) => {
        if (e.target.value.length > 5) {
            this.setState({
                isUserNameValid: true, errors: {
                    ...this.state.errors,
                    userNameError: ''
                },
                loginId: e.target.value
            });
        } else {
            this.setState({
                isUserNameValid: false, errors: {
                    ...this.state.errors,
                    userNameError: 'Invalid Username'
                }
            });
        }
    }

    onChangeContactNumberHandler = (e) => {
        if (e.target.value.length > 9) {
            this.setState({
                isContactNumberValid: true, errors: {
                    ...this.state.errors,
                    contactNumberError: ''
                },
                contactNumber: e.target.value
            });
        } else {
            this.setState({
                isContactNumberValid: false, errors: {
                    ...this.state.errors,
                    contactNumberError: 'Invalid Contact Number'
                }
            });
        }
    }

    onClickGoBackHandler = () => {
        this.props.goBackHandler();
    }

    render() {
        const { errors } = this.state;
        const { emailError, passwordError, confirmPasswordError, firstNameError, lastNameError, contactNumberError, userNameError } = errors;
        return (
            <div className="register-container">
                <div className="title">{'Register'}</div>
                <div className="input-fields">
                    <InputField title={'First Name'} type={'text'} name={'firstName'} style={'input-box'} placeholder={'First Name'} onChangeHandler={(e) => this.onChangeFirstNameHandler(e)} />
                    <InputField title={'Last Name'} type={'text'} name={'lastName'} style={'input-box'} placeholder={'Last Name'} onChangeHandler={(e) => this.onChangeLastNameHandler(e)} />
                    <InputField title={'Email'} type={'email'} name={'email'} style={'input-box'} placeholder={'Email'} onChangeHandler={(e) => this.onChangeEmailHandler(e)} />
                    <InputField title={'Username'} type={'text'} name={'username'} style={'input-box'} placeholder={'Username'} onChangeHandler={(e) => this.onChangeUsernameHandler(e)} />
                    <InputField title={'Contact Number'} type={'number'} name={'contactNumber'} style={'input-box'} placeholder={'Contact Number'} onChangeHandler={(e) => this.onChangeContactNumberHandler(e)} />
                    <InputField title={'Password'} type={'password'} name={'password'} style={'input-box'} placeholder={'Password'} onChangeHandler={(e) => this.onChangePasswordHandler(e)} />
                    <InputField title={'Confirm Password'} type={'password'} name={'confirmPassword'} style={'input-box'} placeholder={'Confirm Password'} onChangeHandler={(e) => this.onChangeConfirmPasswordHandler(e)} />
                </div>
                <div className="register-errors-container">
                    {![''].includes(emailError) && <InputError errorMessage={emailError} />}
                    {![''].includes(passwordError) && <InputError errorMessage={passwordError} />}
                    {![''].includes(confirmPasswordError) && <InputError errorMessage={confirmPasswordError} />}
                    {![''].includes(firstNameError) && <InputError errorMessage={firstNameError} />}
                    {![''].includes(lastNameError) && <InputError errorMessage={lastNameError} />}
                    {![''].includes(contactNumberError) && <InputError errorMessage={contactNumberError} />}
                    {![''].includes(userNameError) && <InputError errorMessage={userNameError} />}
                </div>
                <div className='button-container'>
                    <button className="primary-button" onClick={this.onClickRegisterHandler}>{'Register'}</button>
                    <button className="primary-button" onClick={this.onClickGoBackHandler}>{'Go Back'}</button>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;