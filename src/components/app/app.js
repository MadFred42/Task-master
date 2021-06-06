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
            user: '',
            term: '',
            filter: 'all'
        }
        this.onLogIn = this.onLogIn.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);

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

    onToggleImportant(index) {
        this.setState(({data}) => {
            if (data[index].complete) {
                return
            } 
            const newArr = [...data];
            const oldItem = newArr.splice(index, 1)[0];
            if (oldItem.important) {
                oldItem.important = false;
                const t = newArr.filter(item => item.important).length;
                newArr.splice(t, 0, oldItem);
            } else {
                oldItem.important = true;
                newArr.unshift(oldItem);
            }            
            
            return {
                data: newArr
            }
        });
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    searchTask(items, term) {
        if (term.length === '') {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        })
    }

    onUpdateFilter(filter) {
        this.setState({filter});
    }

    filterTask(items, filter) {
        if (filter === 'complete') {
            return items.filter(item => item.complete);
        } else {
            return items;
        }
    }
    
    render() {
        const {data, modal, user, isLoggedIn, term, filter} = this.state;
        const allTasks = data.length;
        const completed = data.filter(item => item.complete).length;
        const visiblePosts = this.filterTask(this.searchTask(data, term), filter);
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
                    isLoggedIn={isLoggedIn}
                    onUpdateSearch={this.onUpdateSearch} />
                    <TaskFilter
                    isLoggedIn={isLoggedIn}
                    filter ={filter}
                    onUpdateFilter={this.onUpdateFilter} />
                </div>
                <TaskList
                isLoggedIn={isLoggedIn}
                posts={visiblePosts}
                onComplete={this.onComplete}
                onDelete={this.onDelete}
                onToggleImportant={this.onToggleImportant}/>
                <TaskAddForm
                isLoggedIn={isLoggedIn}
                addTask={this.onAdd} />
            </div>
        )
    }
}
