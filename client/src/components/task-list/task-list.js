import React from 'react';
import TaskAddForm from '../task-add-form/task-add-form';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = () => {
        return (
            <ul className='task__list'>
                <TaskListItem />
                <TaskAddForm />
            </ul>
        )
}

export default TaskList;