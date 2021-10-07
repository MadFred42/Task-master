import { observer } from 'mobx-react-lite';
import React from 'react';
import LogInFrom from '../components/logInForm';
import SignUpForm from '../components/signUpForm';

const MainPage = observer(() => {
    
    return (
        <div className='main__page'>
            <LogInFrom />
            <SignUpForm />  
        </div>
    )
});

export default MainPage;