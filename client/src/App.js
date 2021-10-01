import React, { useContext, useEffect } from 'react';
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
    
    return (
        <MainPage />
    );
});

export default App;
