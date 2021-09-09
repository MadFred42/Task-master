import React from "react";
import { connect } from "react-redux";
import { signUpForm } from "../../actions";

const SignUpButton = ({ signUpForm }) => {

    return (
        <button 
        className='signup__button'
        onClick={() => signUpForm()}>
            Sign up</button>
    )
}

const mapDispatchToProps = {
    signUpForm
}

export default connect(null, mapDispatchToProps)(SignUpButton);