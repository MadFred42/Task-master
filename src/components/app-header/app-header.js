import React from 'react';

import './app-header.css';

const AppHeader = ({isLoggedIn, user}) => {

    if (isLoggedIn) {
        return (
            <div className="app-header d-flex">
                <h1>{user}</h1>
                <h2>You have 5 tasks, 0 completed</h2>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default AppHeader;