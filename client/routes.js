import React from 'react';
import Land from './Land';
import About from './About';
import NoMatch from './NoMatch';
import DashboardLayout from "./components/dashboard/Layout";
import InSession from "./components/in-session/InSession";
import Vault from "./components/vault/Vault.js";
import Agenda from "./components/agenda/Agenda.js";
import Interactions from "./components/interactions/Interactions.js";
import RegisteredUsers from "./components/users-list/RegisteredUsers";
import LoggedInUsers from "./components/users-list/LoggedInUsers";
import MainSettingsPage from "./components/settings/MainSettingsPage";
import RollCall from "./components/roll-call/RollCall";
import Message from './components/ContentMessage/Message';
import Login from "./components/authentication/login/Login";
import Register from "./components/authentication/register/Register";

const routes = [
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {index: true, element: <Land/>},
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/session',
                element: <InSession/>,
            },
            {
                path: '/vault',
                element: <Vault/>,
            },
            {
                path: '/agenda',
                element: <Agenda/>,
            },
            {
                path: '/interactions',
                element: <Interactions/>,
            },
            {
                path: '/registered-users',
                element: <RegisteredUsers/>
            },
            {
                path: '/logged-in-users',
                element: <LoggedInUsers/>
            },
            {
                path: '/settings',
                element: <MainSettingsPage/>,
            },
            {
                path: '/roll-call',
                element: <RollCall/>
            },
            {
                path: '/ContentMessage',
                element: <Message/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {path: "*", element: <NoMatch/>}
        ]
    },
    {path: "*", element: <NoMatch/>}
];

export default routes;
