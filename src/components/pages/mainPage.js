import React from 'react';
import Header from '../header';
import LogInFrom from '../logInForm';
import SignUpForm from '../signUpForm';

const MainPage = () => {

    return (
        <div className='main__page'>
            <Header /> 
            <LogInFrom />
            <SignUpForm />
        </div>
    )
}

export default MainPage;