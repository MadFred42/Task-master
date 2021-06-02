import React from 'react';

import './task-list-item.css'

const TaskListItem = () => {
    return (
        <li className="task-list-item d-flex justify-content-between">
            <span className="task-list-item-label">Hello World!</span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fas fa-star" />
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fas fa-trash" />
                </button>
                <i className="fas fa-heart" />
            </div>
        </li>
    );
}

export default TaskListItem;