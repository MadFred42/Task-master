import React, {Component} from 'react';

import './task-filter.css';

const TaskFilter = () => {

    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'complete', label: 'Completed'}
    ];

    const renderButtons = buttons.map(({name, label}) => {
        const {filter, onUpdateFilter} = this.props;
        const active = filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline-secondary';          
        return (
            <button
            key={name}
            className={`btn ${clazz}`}
            onClick={() => onUpdateFilter(name)}>
                {label}</button>
        )
    });

    return (
        <div className="align-items-center d-flex">
            {renderButtons}
        </div>
    )

}