import React, { useContext } from 'react';
import { Context } from '../..';

import './app-header.css';

const AppHeader = () => {
    const { taskStore } = useContext(Context);
    const completed = taskStore.tasks.filter(task => task.completed);

    return (
        <div className="app__header">
            <h1>You have {taskStore.tasks.length} tasks, {completed.length} completed</h1>
        </div>
    )
}

export default AppHeader;