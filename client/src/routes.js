import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import AuthView from './Components/AuthView/authview';
import Dashboard from './Components/Dashboard/dashboard';
import Search from './Components/Search/search';
import Profile from './Components/Profile/profile';

export default (
    <Router>
        <div>
            <Route exact path = '/' component = {AuthView} />
            <Route path = '/dashboard' component = {Dashboard} />
            <Route path = '/search' component = {Search} />
            <Route path = '/profile' component = {Profile} />
        </div>
    </Router>
);