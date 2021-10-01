import React, { useContext } from "react";
import { Context } from "../..";
import { observer } from 'mobx-react-lite';

const SignoutButton = observer(() => {
    const {store} = useContext(Context);
    
    return (
        <button 
            className='signup__button'
            onClick={() => store.logout()}>
                Sign out
        </button>
    )
});

export default SignoutButton;