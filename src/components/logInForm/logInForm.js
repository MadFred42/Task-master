import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import WithTaskMasterService from "../hoc";

import './logInForm.css';

const LogInFrom = ({ service, signUpForm }) => {
    const [users, updateUsers] = useState([]);
    const [inputEmailOrUsername, updateInputEmailOrUsername] = useState('');
    const [inputPassword, updateInputPassword] = useState('');
    const history = useHistory();
    const shadow = signUpForm ? 'shadowed' : 'unshadowed'; 

    useEffect(() => {
        service.getResource('/users')
            .then(items => {
                updateUsers(items);
            });
    }, []);
    console.log(inputEmailOrUsername);
    const signInSubmit = (e) => {
        e.preventDefault();

        if (!inputEmailOrUsername || !inputEmailOrUsername) {
            return
        }
        
        const res = users.filter(item => {
            return (item.username  === inputEmailOrUsername.target.value) || (item.email  === inputEmailOrUsername.target.value);
        });  
         
        if (res.length === 0 && inputPassword.target.value === 1) {
            history.push('/tasks');
        } else {    
            inputEmailOrUsername.target.style.border = '2px solid red';
            inputPassword.target.style.border = '2px solid red';
        }
    }

    return (
        <form className='login-form' onSubmit={signInSubmit}>
            <div className='login__input-block'>
                <input 
                    className='login__input' 
                    type='text'
                    placeholder='Your email or username...'
                    onChange={updateInputEmailOrUsername} />
                <input 
                    className='login__input' 
                    type='text' 
                    placeholder='Your password...'
                    onChange={updateInputPassword} />
            </div>
            <button className='login__button'><p>Log In</p></button>
        </form>
    )
}

export default WithTaskMasterService()(LogInFrom);