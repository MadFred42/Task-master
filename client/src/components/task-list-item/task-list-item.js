import React from 'react';

import './task-list-item.css'

const TaskListItem = ({label, important, complete, onComplete, onDelete, onToggleImportant}) => {
    let classNames = 'task-list-item d-flex justify-content-between',
        classImportant = 'btn-star btn-sm'

    if (important) {
        classNames += ' important';
    } 

    if (complete) {
        classNames += ' complete';
        classImportant += ' d-none';
    }
    
    return (
        <div className={classNames}>
            <span 
            className="task-list-item-label"
            onDoubleClick={onComplete}>
                {label}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                className={classImportant}
                onClick={onToggleImportant}>
                    <i className="fas fa-star" />
                </button>
                <button 
                className="btn-trash btn-sm"    
                onClick={onDelete}>
                    <i className="fas fa-trash" />
                </button>
                <i className="fas fa-check-square" />
            </div>
        </div>
    );
}

export default TaskListItem;