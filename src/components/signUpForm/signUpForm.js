import React from "react";
import { connect } from "react-redux";
import { closeSingUpForm } from "../../actions";

import './signUpForm.css';

const SignUpForm = ({ closeSingUpForm }) => {
    


    return (
        <form
            className='from_container'
            action="#">
                <button 
                    className="close_btn"
                    type="button"
                    onClick={() => closeSingUpForm()}>
                        &times;
                </button>
                <input 
                    placeholder="Your username"
                    type="text" 
                    className="" />
                <input 
                    placeholder="Your email" 
                    type="text" 
                    className="" />
                <button 
                    className="submit_btn"
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