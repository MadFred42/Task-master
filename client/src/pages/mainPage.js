import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Header from '../components/header';
import LogInFrom from '../components/logInForm';
import SignUpForm from '../components/signUpForm';
import TaskList from '../components/task-list';

const MainPage = observer(() => {
    const {store} = useContext(Context);
    console.log(store.isAuth);
    return (
        <div className='main__page'>
            <Header /> 
            {
                store.isAuth ?
                <TaskList />
                :
                <>
                    <LogInFrom />
                    <SignUpForm />  
                </>
            }
        </div>
    )
});

export default MainPage;