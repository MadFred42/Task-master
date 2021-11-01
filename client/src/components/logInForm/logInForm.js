import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../..";

import './logInForm.css';

const LogInFrom = observer(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    const signInSubmit = (e) => {
        store.login(email, password);
        setEmail('');
        setPassword('')
        e.preventDefault();
    };
    
    return (
        <form className='login-form' onSubmit={signInSubmit}>
            <div className='login__input-block'>
                {
                    store.error ? 
                    <div className='login__error__message'>{store.error}</div> :
                    null
                }
                <input 
                    className={`login__input ${store.error ? 'error': ''}`}
                    type='text'
                    placeholder='Your email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input 
                    className={`login__input ${store.error ? 'error': ''}`} 
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
});

export default LogInFrom;