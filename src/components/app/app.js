import React, {Component} from 'react';

import AppHeader from '../app-header';
import LoggingElems from '../logging-elems';
import SearchPanel from '../search-panel';
import TaskFilter from '../task-filter';
import TaskList from '../task-list';
import TaskAddForm from '../task-add-form';
import ModalLogin from '../modal-login';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                
            ],
            modal: false,
            isLoggedIn: false,
            user: ''
        }
        this.onLogIn = this.onLogIn.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onImportant = this.onImportant.bind(this);

        this.id = 1;
    }

    onLogIn() {
        this.setState({
            data: [],
            modal: true,
            isLoggedIn: false
        });
    }

    onLogOut() {
        this.setState({
            data: [],
            isLoggedIn: false,
            user: ''
        });
    }

    closeModal() {
        this.setState({modal: false});
    }

    onSignIn(textName, textLastName) {
        this.setState({
            data: [],
            modal: false,
            isLoggedIn: true,
            user: `${textName} ${textLastName}`
        });
    }

    onAdd(text) {
        const newItem = {
            label: text,
            important: false,
            complete: false,
            id: this.id++
        };

        this.setState(({data}) => {
            const newArr = [...data.filter(item => !item.complete), newItem, ...data.filter(item => item.complete)];;
            return {
                data: newArr
            };
       });
    }

    onComplete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: false, complete: true};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            newArr.push(...newArr.splice(newArr.findIndex(item => item.complete === true), 1));
            return {
                data: newArr
            };
        });
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    onImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: true};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            newArr.unshift(...newArr.splice(newArr.findIndex(item => item.id === id), 1));

            if (!newItem.complete) {
                return {
                    data: newArr
                };
            }
        });
    }

    // onUnImportant(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(item => item.id ===id);
    //         const oldItem = data[index];
    //         const newItem = {...oldItem, important: false};
    //     })
    // }
    
    render() {
        const {data, modal, user, isLoggedIn} = this.state;
        const allTasks = data.length;
        const completed = data.filter(item => item.complete).length;
        return (
            <div className="app">
                <ModalLogin
                modal={modal}
                closeModal={this.closeModal}
                onSignIn={this.onSignIn} />
                <AppHeader
                allTasks={allTasks}
                completed={completed}
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
                onComplete={this.onComplete}
                onDelete={this.onDelete}
                onImportant={this.onImportant}
                onUnImportant={this.onUnImportant} />
                <TaskAddForm
                isLoggedIn={isLoggedIn}
                addTask={this.onAdd} />
            </div>
        )
    }
}
