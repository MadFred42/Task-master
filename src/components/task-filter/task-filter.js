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
                className="btn btn-outline-secondary">{label}</button>
            )
        });
        if (this.props.isLoggedIn) {
            return (
                <div className="align-items-center d-flex">
                    {buttons}
                </div>
            )
        } else {
            return <div></div>
        }
    }
}