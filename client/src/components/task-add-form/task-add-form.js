import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';

import './task-add-form.css';

const TaskAddForm = observer(() => {
    const [task, setTask] = useState('');
    const {taskStore} = useContext(Context);

    const postTask = () => {
        taskStore.saveTask(task);
        setTask('');
    }
    
    return (    
        <div>
            <input
            className="form-control new-post-label"
            type="text"
            placeholder="What you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)} />
            <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => postTask()}>Add</button>
        </div>
    )
});

export default TaskAddForm;