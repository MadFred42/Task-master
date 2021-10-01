import React, { useContext, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import { MainPage } from './pages';

import './App.css';
import { Context } from '.';

const App = observer(() => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    if (store.isLoading) {
        return <div style={{margin: "auto"}}>Loading...</div>
    }

    const history = useHistory();
    console.log(history.location);
    return (
        <MainPage />
    );
});

export default App;
