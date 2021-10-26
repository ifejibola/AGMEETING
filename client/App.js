import React from "react";
import {Route, Switch} from "react-router-dom";
import Land from "./Land";
import About from "./About";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Land}/>
            <Route exact path="/about" component={About}/>
        </Switch>
    );
};