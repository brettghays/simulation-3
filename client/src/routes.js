import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import authview from './Components/AuthView/authview';
import dashboard from './Components/Dashboard/dashboard';
import search from './Components/Search/search';
import profile from './Components/Profile/profile';

export default (
    <Router>
        <div>
            <Route exact path = '/' component = {authview} />
            <Route path = '/dashboard' component = {} />
            <Route path = '/search' component = {} />
            <Route path = '/profile' component = {} />
        </div>
    </Router>
);