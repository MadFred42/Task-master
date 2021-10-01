import React from 'react';

import './app-header.css';

const AppHeader = ({isLoggedIn, user, allTasks, completed}) => {

    if (isLoggedIn) {
        return (
            <div className="app-header d-flex">
                <h1>{user}</h1>
                <h2>You have {allTasks} tasks, {completed} completed</h2>
            </div>
        )
    } else {
        return null;
    }
}

export default AppHeader;