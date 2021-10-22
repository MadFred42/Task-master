import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import TaskAddForm from '../task-add-form/task-add-form';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = observer(() => {
    const { taskStore, store } = useContext(Context);
    let checkAllClassName = 'fas fa-check-double check__double-button';
    let deleteCheckedTasksClassName = 'hide';
    if (taskStore.tasks.filter(item => item.checked).length === taskStore.tasks.length) {
        checkAllClassName = 'fas fa-check-double checked';
        deleteCheckedTasksClassName = 'fas fa-trash trash-button'
    }

        return (
            <>
                <div className="all__tasks__buttons">
                    <input 
                        title="Choose all tasks"
                        type="checkbox" 
                        className={checkAllClassName} 
                        onClick={(e) => taskStore.checkAll(e.target.checked)} />
                    <i 
                        title="Delete selected tasks"
                        className={deleteCheckedTasksClassName}
                        onClick={() => taskStore.deleteCheckedTasks()} />
                </div>
                {
                    !store.user.isActivated &&  // if user didn't activate his account he'll get this message
                        <span>Please activate your account! The activation link was sent to your email.</span>
                }
                <ul className='task__list'>
                    <TaskListItem />
                </ul>
                <TaskAddForm />
            </>
        )
});

export default TaskList;