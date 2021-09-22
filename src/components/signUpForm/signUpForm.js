import React, { useState } from "react";
import { connect } from "react-redux";
import { closeSignUpForm, getEmail, getPassword, getUsername, getRepeatPassword, signUpComplete } from "../../actions";
import WithTaskMasterService from '../hoc';
import { useHistory } from 'react-router-dom';

import './signUpForm.css';

const SignUpForm = ({ closeSignUpForm, service, signUpComplete, signUpForm }) => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [username, getUsername] = useState('');
    const [repeatPassword, getRepeatPassword] = useState('');
    const history = useHistory();
    const visible = signUpForm ? 'show' : 'hide';
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (repeatPassword.target.value !== password.target.value) {
            password.target.style.border = '2px solid red';
            repeatPassword.target.style.border = '2px solid red';
            getPassword('');
            getRepeatPassword('');
            return
        }
        
        service.signUpUser(email.target.value, password.target.value, username.target.value);
        signUpComplete();
        history.push('/tasks');
    }

    return (
        <form className={`from__container ${visible}`} action="#" onSubmit={(e) => handleSubmit(e)} >
            <div className='from__header'>
                <span>Sign up for Task Master</span>
                <button 
                    className="close__btn"
                    type="button"
                    onClick={() => closeSignUpForm()}>
                        &times;
                </button>
            </div>
            <div className='signup__inpit-block'>
                <input 
                    placeholder="Your username"
                    type="text"
                    onChange={getUsername} />
                <input 
                    placeholder="Your email" 
                    type="text"
                    onChange={getEmail} />
                <input 
                    placeholder="Password" 
                    type="text"
                    onChange={getPassword} />
                <input 
                    placeholder="Repeat password" 
                    type="text" 
                    onChange={getRepeatPassword} />
            </div>
            <button 
                className="submit__btn"
                type="submit">
                    Sign Up
            </button>
        </form>
    )
};

const mapStateToProps = ({ email, password, username, repeatPassword, signUpForm }) => {
    return {
        email,
        password,
        username,
        repeatPassword,
        signUpForm
    }
}

const mapDispatchToProps = {
    closeSignUpForm,
    getEmail,
    getPassword,
    getUsername,
    getRepeatPassword,
    signUpComplete
}

export default WithTaskMasterService()(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));