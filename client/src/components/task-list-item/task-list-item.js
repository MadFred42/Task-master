import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import { EdditForm } from '../eddit-form/eddit-form';

import './task-list-item.css';

const TaskListItem = observer(() => {
    const { taskStore } = useContext(Context);
    
    if (!taskStore.tasks) { // avoiding any errors if there's no tasks
        return null;
    }
    
    const content = taskStore.tasks.map(item => {
        const { _id, completed, important, task, checked, eddit } = item;
        let classNames;
        let classCheck = 'fas fa-check-circle check__btn';
        
        if (important) {
            classNames = 'task__list-item important';
        } else {
            classNames = 'task__list-item';
        }

        if (completed) {
            classNames = 'task__list-item complete';
        }

        if (checked) {
            classCheck = 'fas fa-check-circle checked';
        }

        return (
            <div className='task__list-wrap' key={_id}>
                <i 
                    className={classCheck}
                    id={task}
                    onClick={(e) => taskStore.checkTask(e.target.id)} />
                <li className={classNames}>
                    <span 
                        className="task__list-item-label">
                            {task}
                    </span>
                    {eddit && <EdditForm task={task} />}
                    <div className="list__group-buttons">
                        <button
                            className="btn-star btn-sm"
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
                        <button className="btn-check-square"
                            id={task}
                            onClick={(e) => taskStore.completeTask(e.target.id)}>
                            <i 
                                className="fas fa-check-square"
                                id={task} />
                        </button>
                    </div>
                </li>
                <i 
                    id={task}
                    className="fas fa-pen pen__btn"
                    onClick={(e) => taskStore.setEditTaskLabel(e.target.id)}></i>
            </div>
        )
    });
    
    return (
        content
    );
})

export default TaskListItem;