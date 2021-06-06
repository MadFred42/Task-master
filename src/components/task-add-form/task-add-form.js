import React, {Component} from 'react';

import './task-add-form.css';

export default class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onType = this.onType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onType(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTask(this.state.text);
        this.setState({
            text: ''
        })
    }
    
    render() {
        if (this.props.isLoggedIn) {
            return (
                <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                    <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="What you need to do?"
                    value={this.state.text}
                    onChange={this.onType} />
                    <button
                    type="submit"
                    className="btn btn-outline-secondary">Add</button>
                </form>
            )
        } else {
            return null;
        }
    }
}