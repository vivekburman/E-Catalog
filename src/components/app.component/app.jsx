import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../home.component/home';
import LandingPage from '../landing.component/landing';
import './app.scss';

class ECatalog extends Component{
    render() {
        return (
            <div className="ec-app">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default ECatalog;