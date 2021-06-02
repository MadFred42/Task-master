import React from 'react';

import './task-list-item.css'

const TaskListItem = ({label, important, like, onLike, onDelete}) => {
    let classNames = 'task-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important'
    } 

    if (like) {
        classNames += ' like'
    }
    
    return (
        <div className={classNames}>
            <span 
            className="task-list-item-label"
            onDoubleClick={onLike}>
                {label}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fas fa-star" />
                </button>
                <button 
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <i className="fas fa-trash" />
                </button>
                <i className="far fa-heart" />
            </div>
        </div>
    );
}

export default TaskListItem;