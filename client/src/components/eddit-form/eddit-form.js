import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';

import './eddit-form.css';

export const EdditForm = observer(({ task }) => {
    const { taskStore } = useContext(Context);
    const {newLabel, setNewLabel} = useState('');
    let changingForm = 'changing__form hidden';
    
    if (taskStore.tasks.filter(task => task.eddit)) {
        changingForm = 'changing__form'
    }
    
    return (
        <form 
            className={changingForm}
            onChange={() => console.log('hi')}>
            <input 
                type='text' 
                placeholder='Write new task'
                className='changing__input'
                onChange={(e) => setNewLabel(e.target.value)} />
            <button type='submit' className='changing__button'>Save</button>
            <button
                id={task} 
                type='button' 
                className='changing__button-close'
                onClick={(e) => taskStore.setEditTaskLabel(e.target.id)}>
                    Close
            </button>
        </form>
    )
});