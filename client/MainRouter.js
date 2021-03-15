import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import ModeratorLogin from './Moderator/moderator.login'
import signup from './Moderator/signup.js';
import test from './Moderator/test.js';

const MainRouter = () => {
    return (<div>
        {/* <Menu /> */}
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/msignup" component={signup} />
            <Route path="/moderatorLogin" component={ModeratorLogin} />
            <Route path="/test" component={test} />

        </Switch>
    </div>)
}

export default MainRouter
