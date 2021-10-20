import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';

import './eddit-form.css';

export const EdditForm = observer(({ task }) => {
    const { taskStore } = useContext(Context);
    const [newLabel, setNewLabel] = useState('');
    let changingForm = 'changing__form hidden';
    
    const changeTask = (e) => {
        taskStore.changeTask(newLabel, e.target.id);
        console.log(e.target.id);
        e.preventDefault();
    }

    if (taskStore.tasks.filter(task => task.eddit)) {
        changingForm = 'changing__form';
    }
    
    return (
        <form 
            id={task}
            className={changingForm}
            onSubmit={(e) => changeTask(e)}>
            <input 
                type='text' 
                placeholder='Change your task'
                className='changing__input'
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)} />
            <div className='changin__buttons-block'>
                <button type='submit' className='changing__button'>Save</button>
                <button
                    id={task} 
                    type='button' 
                    className='changing__button-close'
                    onClick={(e) => taskStore.toEditTaskLabel(e.target.id)}>
                        Close
                </button>
            </div>
        </form>
    )
});