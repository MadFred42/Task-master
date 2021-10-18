import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';

import './app-header.css';

const AppHeader = observer(() => {
    const { taskStore } = useContext(Context);
    const completed = taskStore.tasks.filter(task => task.completed); // number of completed tasks
    const tasks = taskStore.tasks.length > 1 ? 'tasks' : 'task';

    return (
        <div className="app__header">
            <h1>You have {taskStore.tasks.length} {tasks}, {completed.length} completed</h1>
        </div>
    )
});

export default AppHeader;