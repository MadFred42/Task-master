import React from "react";
import { connect } from "react-redux";
import { closeSignUpForm, getEmail, getPassword, getUsername } from "../../actions";

import './signUpForm.css';

const SignUpForm = ({ closeSignUpForm, email, getEmail, getPassword, getUsername, password, signUpForm, username }) => {
    console.log(email);
    const visible = signUpForm ? 'show' : 'hide';

    const handleSubmit = () => {
        console.log(`Email: ${email}, name: ${username}`);
    }

    return (
        <form className={`from__container ${visible}`} action="#" onChange={handleSubmit()} >
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
                    onChange={(e) => getUsername(e.target.value)} />
                <input 
                    placeholder="Your email" 
                    type="text"
                    onChange={(e) => getEmail(e.target.value)} />
                <input 
                    placeholder="Password" 
                    type="text"
                    onChange={(e) => getPassword(e.target.value)} />
                <input 
                    placeholder="Repeat password" 
                    type="text" 
                    className="" />
            </div>
            <button 
                className="submit__btn"
                type="submit">
                    Sign Up
            </button>
        </form>
    )
};

const mapStateToProps = ({ email, password, username, signUpForm }) => {
    return {
        email,
        password,
        username,
        signUpForm
    }
}

const mapDispatchToProps = {
    closeSignUpForm,
    getEmail,
    getPassword,
    getUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);