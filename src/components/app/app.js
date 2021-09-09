import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from '../pages/mainPage';

import './app.css';

export const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/' component={MainPage} />
            </Switch>
        </div>
    )
}
