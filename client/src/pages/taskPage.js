import React from "react";
import AppHeader from "../components/app-header/app-header";
import TaskList from '../components/task-list';

import './taskPage.css';

const TaskPage = () => {

    return (
        <div className='task__page'>
            <AppHeader />
            <TaskList />
        </div>
    )
}

export default TaskPage;