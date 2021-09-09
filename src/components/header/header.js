import React from 'react';
import SignInButton from '../signInButton';
import SignUpButton from '../signUpButton'

import './header.css'

export const Header = () => {

    return (
        <div className='header__body'>
            <span className='creator__label'>Made and designed by Fedor Lyust</span>
            <span className='main__label'>Task Master</span>
            <div className='button__group'>
                <SignInButton />
                <SignUpButton />
            </div>
        </div>
    )
}