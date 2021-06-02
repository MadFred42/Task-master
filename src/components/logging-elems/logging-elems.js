import React from 'react';

import './logging-elems.css'

const LoggingElems = ({isLoggedIn, onLogIn, onLogOut}) => {
        
    if (isLoggedIn) {
            return (
                <div className="btn-log">
                    <button
                    className="btn btn-outline-secondary"
                    onClick={onLogOut}>
                    Logout</button>
                </div>
            )
        } else {
            return (
                <div className="btn-log">
                    <button
                    className="btn btn-info"
                    onClick={onLogIn}>
                    Login</button>
                </div>
            )
        }
} 

export default LoggingElems;