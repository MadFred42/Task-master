import React, {Component} from 'react';

import './task-filter.css';

export default class TaskFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'complete', label: 'Completed'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
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
        if (this.props.isLoggedIn) {
            return (
                <div className="align-items-center d-flex">
                    {buttons}
                </div>
            )
        } else {
            return null
        }
    }
}