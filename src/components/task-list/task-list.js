import React from 'react';

import TaskListItem from '../task-list-item';


import './task-list.css';

const TaskList = ({posts, onLike, onDelete}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li
            key={id}
            className="list-group-item">
                <TaskListItem {...itemProps}
                onLike={() => onLike(id)}
                onDelete={() => onDelete(id)} />
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