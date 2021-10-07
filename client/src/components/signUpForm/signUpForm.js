import React, { useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

import './signUpForm.css';

const SignUpForm = observer(() => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [username, getUsername] = useState('');

    const {store} = useContext(Context);

    const handleSubmit = (e) => {
        store.registration(email, password, username);
    }

    if (!store._isSignupForm) {
        return null
    }

    return (
        <form className='from__container' action="#" onSubmit={handleSubmit} >
            <div className='from__header'>
                <span>Sign up for Task Master</span>
                <button 
                    className="close__btn"
                    type="button"
                    onClick={() => store.setSignupForm(false)}>
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
            </div>
            <button 
                className="submit__btn"
                type="submit"
                >
                    Sign Up
            </button>
        </form>
    )
});

export default SignUpForm;