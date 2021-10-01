import React, { useContext } from "react";
import { Context } from "../..";
import { observer } from 'mobx-react-lite';

const SignUpButton = observer(() => {
    const {store} = useContext(Context);
    
    return (
        <button 
            className='signup__button'
            onClick={() => store.setSignupForm(true)}>
                Sign up
        </button>
    )
});

export default SignUpButton;