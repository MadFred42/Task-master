import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import SignoutButton from '../signoutButton';
import SignUpButton from '../signUpButton'

import './header.css'

const Header = observer(() => {
    const {store} = useContext(Context);
    
    return (
        <div className='header__body'>
            {
                store.isAuth ?
                <span className='header__username'>{store.user.username}</span>
                :
                <span className='creator__label'>Made and designed by Fedor Lyust</span>
            }
            <span className='main__label'>Task Master</span>
            {
                store.isAuth ?
                <SignoutButton />
                :
                <SignUpButton />
            }
        </div>
    )
});

export default Header;