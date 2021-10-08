import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';

import './task-add-form.css';

const TaskAddForm = observer(() => {
    const [task, setTask] = useState('');
    const {taskStore} = useContext(Context);

    const postTask = (e) => {
        taskStore.saveTask(task);
        setTask('');
        e.preventDefault();
    }
    
    return (    
        <form 
            className='add__form'
            onSubmit={postTask}>
            <input
                className="add__input"
                type="text"
                placeholder="What you need to do?"
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button
                type="submit"
                className="add__button">
                    Add
            </button>
        </form>
    )
});

export default TaskAddForm;