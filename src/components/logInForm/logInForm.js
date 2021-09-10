import React from "react";

import './logInForm.css';

const LogInFrom = ({ signUpForm }) => {

    const shadow = signUpForm ? 'shadowed' : 'unshadowed'; 

    return (
        <form className='login-form'>
            <div className='login__input-block'>
                <input className='login__input' type='text' placeholder='Your email or username...'></input>
                <input className='login__input' type='text' placeholder='Your password...'></input>
            </div>
            <button className='login__button'><p>Log In</p></button>
        </form>
    )
}

export default LogInFrom;