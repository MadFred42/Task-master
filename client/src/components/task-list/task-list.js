import React, { useContext } from 'react';
import { Context } from '../..';
import TaskAddForm from '../task-add-form/task-add-form';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = () => {
    const { store } = useContext(Context);

        return (
            <>
                {
                    !store.user.isActivated && 
                        <span>Please activate your account! The activation link was sent to your email.</span>
                }
                <ul className='task__list'>
                    <TaskListItem />
                </ul>
                <TaskAddForm />
            </>
        )
}

export default TaskList;