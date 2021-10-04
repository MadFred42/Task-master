import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';

import './task-list-item.css'

const TaskListItem = observer(() => {
    const {taskStore} = useContext(Context);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    const content = tasks.map((item, index) => {
        const {label, _id} = item;
        let classNames = 'task-list-item d-flex justify-content-between',
        classImportant = 'btn-star btn-sm'

        if (taskStore.isImportant) {
            classNames += ' important';
        } 

        if (taskStore.isComplete) {
            classNames += ' complete';
            classImportant += ' d-none';
        }

        return (
            <li className={classNames} key={_id}>
                <span 
                className="task-list-item-label">
                    {label}</span>
                <div className="list__group-buttons">
                    <button 
                    className={classImportant}>
                        <i className="fas fa-star"
                        onClick={() => taskStore.setImportant()} />
                    </button>
                    <button 
                    className="btn-trash btn-sm">
                        <i className="fas fa-trash" />
                    </button>
                    <i className="fas fa-check-square" />
                </div>
            </li>
        )
    })
    
    
    
    return (
        <>
            {content}
        </>
    );
})

export default TaskListItem;