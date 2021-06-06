import React from 'react';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = ({posts, onComplete, onDelete, onImportant}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li
            key={id}
            className="list-group-item">
                <TaskListItem {...itemProps}
                onComplete={() => onComplete(id)}
                onDelete={() => onDelete(id)}
                onImportant={() => onImportant(id)} />
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
        return <div></div>
    }
}

export default TaskList;