import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ErrorBoundry from './components/errorBoundry';
import AuthStore from './stores/AuthStore'
import TaskStore from './stores/TaskStore';

const store = new AuthStore();
const taskStore = new TaskStore();

export const Context = createContext(null);

ReactDOM.render(
            <ErrorBoundry>
                <Context.Provider value={{
                    store,
                    taskStore
                }}>
                    <Router>
                        <App />
                    </Router>
                </Context.Provider>
            </ErrorBoundry>,
    document.getElementById('root')
);