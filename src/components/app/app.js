import React, {Component} from 'react';

import AppHeader from '../app-header';
import LoggingElems from '../logging-elems';
import SearchPanel from '../search-panel';
import TaskFilter from '../task-filter';
import TaskList from '../task-list';
import TaskAddForm from '../task-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                
            ],
            isLoggedIn: false,
            user: ''
        }
        this.onLogIn = this.onLogIn.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.id = 1;
    }

    onLogIn() {
        const name = prompt('What is your name?', );
        this.setState({
            data: [],
            isLoggedIn: true,
            user: name
        })
    }

    onLogOut() {
        this.setState({
            data: [],
            isLoggedIn: false,
            user: ''
        })
    }

    onAdd(text) {
        const newItem = {
            label: text,
            important: false,
            like: false,
            id: this.id++
        }

       this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
       })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }) 
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        }) 
    }
    
    render() {
        const {data, user, isLoggedIn} = this.state;
        return (
            <div className="app">
                <AppHeader
                isLoggedIn={isLoggedIn}
                user={user} />
                <LoggingElems
                isLoggedIn={isLoggedIn}
                onLogIn={this.onLogIn}
                onLogOut={this.onLogOut} />
                <div className="search-panel d-flex">
                    <SearchPanel
                    isLoggedIn={isLoggedIn} />
                    <TaskFilter
                    isLoggedIn={isLoggedIn} />
                </div>
                <TaskList
                isLoggedIn={isLoggedIn}
                posts={data}
                onLike={this.onToggleLike}
                onDelete={this.onDelete} />
                <TaskAddForm
                isLoggedIn={isLoggedIn}
                addTask={this.onAdd} />
            </div>
        )
    }
}
