import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/app';
import configureStore from './store';
import ErrorBoundry from './components/errorBoundry';
import ServiceContext from './components/serviceContext';
import TaskMasterService from './services/taskMasterService';

const { persistor, store } = configureStore();
const service = new TaskMasterService();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundry>
                <ServiceContext.Provider value={service}>
                    <Router>
                        <App />
                    </Router>
                </ServiceContext.Provider>
            </ErrorBoundry>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);