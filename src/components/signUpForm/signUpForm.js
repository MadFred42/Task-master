import React from "react";
import { connect } from "react-redux";
import { closeSingUpForm } from "../../actions";

import './signUpForm.css';

const SignUpForm = ({ closeSingUpForm, signUpForm }) => {
    
    const visible = signUpForm ? 'show' : 'hide';

    return (
        <form className={`from__container ${visible}`} action="#">
            <div className='from__header'>
                <span>Sign up for Task Master</span>
                <button 
                    className="close__btn"
                    type="button"
                    onClick={() => closeSingUpForm()}>
                        &times;
                </button>
            </div>
            {/* <span>Please insert your Name, email and password</span> */}
            <div className='signup__inpit-block'>
                <input 
                    placeholder="Your username"
                    type="text" 
                    className="" />
                <input 
                    placeholder="Your email" 
                    type="text" 
                    className="" />
                <input 
                    placeholder="Password" 
                    type="text" 
                    className="" />
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

const mapStateToProps = ({ signUpForm }) => {
    return {
        signUpForm
    }
}

const mapDispatchToProps = {
    closeSingUpForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);