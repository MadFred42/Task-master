import React from 'react';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = ({posts, onComplete, onDelete, onToggleImportant}) => {
    const elements = posts.map((item, index) => {
        const {id, ...itemProps} = item;
        return (
            <li
            key={id}
            className="list-group-item">
                <TaskListItem {...itemProps}
                onComplete={() => onComplete(id)}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(index)} />
            </li>
        )
    });

    if (posts.length > 0) {
        return (
            <ul className="task-list list-group-item">
                {elements}
            </ul>
        )
    }  else {
        return null
    }
}

export default TaskList;