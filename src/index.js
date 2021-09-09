import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/app';
import configureStore from './store';
import ErrorBoundry from './components/errorBoundry';
// import TaskMasterServiceContext from './components/service-context'

const { persistor, store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundry>
                <Router>
                    <App />
                </Router>
            </ErrorBoundry>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);