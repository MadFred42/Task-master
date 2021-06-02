import React from 'react';

import TaskListItem from '../task-list-item';

import './task-list.css';

const TaskList = () => {
    return (
        <ul className="task-list list-group">
            <TaskListItem />
        </ul>
    )
}

export default TaskList;