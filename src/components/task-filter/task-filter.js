import React, {Component} from 'react';

import './task-filter.css';

export default class TaskFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <button
                key={name}
                className="btn-info">{label}</button>
            )
        });
        return (
            <div>
                {buttons}
            </div>
        )
    }
}