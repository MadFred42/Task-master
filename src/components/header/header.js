import React from 'react';
import { connect } from 'react-redux';
import SignUpButton from '../signUpButton'

import './header.css'

const Header = ({ signUpForm }) => {
    
    const shadow = signUpForm ? 'shadowed' : 'unshadowed'; 

    return (
        <div className={`${shadow}`}>
            <div className='header__body'>
                <span className='creator__label'>Made and designed by Fedor Lyust</span>
                <span className='main__label'>Task Master</span>
                <SignUpButton />
            </div>
        </div>
        
    )
}

const mapStateToProps = ({ signUpForm }) => {
    return {
        signUpForm
    }
}

export default connect(mapStateToProps, null)(Header);