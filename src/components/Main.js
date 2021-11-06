import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './About'
import Buy from './Buy'
import ErrorPage from './ErrorPage'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Sell from './Sell'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Buy" component={Buy}/>
                <Route path="/Sell" component={Sell}/>
                <Route path="/About" component={About}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Login" component={Login}/>
                <Route component={ErrorPage}/>
            </Switch>
        </main>
    );
}

export default Main;