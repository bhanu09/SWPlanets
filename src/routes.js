import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './components/LoginPage';
import Search from './components/SearchPage';

var history = createBrowserHistory();

export default ()=>(
    <Router history={history}>
        <div className="container">
            <Route path="/" render={props => (
                localStorage.getItem("user")
                ? (<Redirect to={{pathname: "/search"}} />)
                : (<Login {...props} />)
            )} exact/>
            <Route path="/search" render={props => (
                !localStorage.getItem("user")
                ? (<Redirect to={{pathname: "/"}} />)
                : (<Search {...props} />)
            )} />
        </div>
    </Router>
);