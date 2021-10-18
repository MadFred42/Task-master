import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';

import './task-list-item.css';

const TaskListItem = observer(() => {
    const { taskStore } = useContext(Context);
    
    if (!taskStore.tasks) {
        return null;
    }
    
    const content = taskStore.tasks.map((item, index) => {
        const { _id, completed, important, task } = item;
        let classNames;
        let classImportant  = 'btn-star btn-sm'
        
        if (important) {
            classNames = 'task__list-item important';
        } else {
            classNames = 'task__list-item';
        }

        if (completed) {
            classNames += ' complete';
            classImportant += ' d-none'
        }

        return (
            <li className={classNames} key={_id}>
                <span 
                className="task__list-item-label">
                    {task}</span>
                <div className="list__group-buttons">
                    <button
                    className={classImportant}
                    id={task}
                    onClick={(e) => taskStore.toggleImportantTask(e.target.id)}>
                        <i 
                        className="fas fa-star"
                        id={task} />
                    </button>
                    <button 
                    id={task}
                    className="btn-trash btn-sm"
                    onClick={(e) => taskStore.deleteTask(e.target.id)}>
                        <i 
                            className="fas fa-trash"
                            id={task} />
                    </button>
                    <button className="btn-check-square">
                        <i 
                            className="fas fa-check-square"
                            id={task} />
                    </button>
                </div>
            </li>
        )
    })
    
    
    
    return (
        content
    );
})

export default TaskListItem;