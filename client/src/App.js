import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { Route, Switch, useHistory } from 'react-router';
import { MAIN_ROUTE, TASK_ROUTE } from './utils/consts';
import Header from './components/header';
import { authRoutes, publicRoutes } from './routes';

import './App.css';

const App = observer(() => {
    const { taskStore, store } = useContext(Context);
    const history = useHistory();
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    useEffect(() => {
        taskStore.getUsersTasks();
    }, [history.location]);

    useEffect(() => {
        if (store.isAuth) {
            history.push(TASK_ROUTE);
        } else {
            history.push(MAIN_ROUTE);
        }
    }, [store.isAuth]);

    if (store.isLoading || taskStore.isLoading) {
        return <div style={{margin: "auto"}}>Loading...</div>
    }
    
    return (
        <>  
            <Header />
            <Switch>
                {store.isAuth && authRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} component={Component} />
                )}
                {publicRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} component={Component} />
                )}
            </Switch>
        </>
    );
});

export default App;
