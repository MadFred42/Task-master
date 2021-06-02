import React, {Component} from 'react';

import './task-add-form.css';

export default class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    
    render() {
        return (
            <form className="bottom-panel d-flex">
                <input
                className="form-control new-task-label"
                type="text"
                placeholder="What you need to do?" />
                <button
                type="submit"
                className="btn btn-outline-secondary">
                    Add</button>
            </form>
        )
    }
}