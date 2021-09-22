import React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, TaskPage } from '../pages';

import './app.css';

export const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/tasks' component={TaskPage} />
            </Switch>
        </div>
    )
}
