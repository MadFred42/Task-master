import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../header/header';
import SignUpForm from '../signUpForm';

const MainPage = ({ signUpForm }) => {

    return (
        <>
            {!signUpForm ? <Header /> : <SignUpForm />}
        </>
    )
}

const mapStateToProps = ({ signUpForm }) => {
    
    return {
        signUpForm
    }
}

export default connect(mapStateToProps, null)(MainPage);