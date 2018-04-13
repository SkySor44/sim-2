import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default (
    <Switch>
        <Route path = '/' component = {Dashboard} exact/>
        <Route path = '/wizard' component = {Wizard}/>
    </Switch>
)