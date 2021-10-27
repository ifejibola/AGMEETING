import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Land from "./Land";
import About from "./About";
import InSession from "./components/in-session/InSession";
import NoMatch from "./NoMatch";

export default function App() {
    return (
        <Router>
            <Link to="/">Landing Page</Link><br/>
            <Link to="/session">In Session Page</Link><br/>
            <Link to="/about">About Page</Link><br/>
            <Switch>
                <Route exact path="/" component={Land}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/session" component={InSession}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    );
};