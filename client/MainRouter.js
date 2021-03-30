import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Login from './auth/moderator.login'
import signup from './Moderator/signup.js';
import test from './Moderator/test.js';
import Menu from './core/Menu'
import ModHome from './Moderator/Home'
import Agenda from './Moderator/Agenda'
import PrivateRoute from './auth/PrivateRoutes'

const MainRouter = () => {
    return (<div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={signup} />
            <Route path="/signin" component={Login} />
            <PrivateRoute path="/home" component={ModHome} />
            <PrivateRoute path="/agenda" component={Agenda} />

        </Switch>
    </div>)
}

export default MainRouter
