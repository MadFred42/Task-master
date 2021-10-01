import React, { useContext, useState } from "react";
import { Context } from "../..";

import './logInForm.css';

const LogInFrom = ({ service, signUpForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    const signInSubmit = (e) => {
        store.login(email, password);
        
        e.preventDefault();
    }

    return (
        <form className='login-form' onSubmit={signInSubmit}>
            <div className='login__input-block'>
                <input 
                    className='login__input' 
                    type='text'
                    placeholder='Your email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input 
                    className='login__input' 
                    type='text' 
                    placeholder='Your password...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button 
                type='submit' 
                className='login__button'>
                    <p>Log In</p>
            </button>
        </form>
    )
}

export default LogInFrom;