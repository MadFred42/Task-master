import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TaskFilter from '../task-filter';
import TaskList from '../task-list';
import TaskAddForm from '../task-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {label: '', inportant: false, like: false, id: '1'}
        ]
    }
    
    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <TaskFilter />
                </div>
                <TaskList />
                <TaskAddForm />
            </div>
        )
    }
}
