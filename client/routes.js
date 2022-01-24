import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from '@mui/material/styles';

import App from './App';

//Layout
import DashboardLayout from './Component/DashBoard/Layout';

//Session Components
import Land from './Land';
import GroupedList3 from './Component/Session/Session';
import Agenda from './Component/Agenda/agenda'
import Vault from './Component/Vault/vault'

import About from './About';
import NoMatch from './NoMatch';
import Testpg from './anothertestpg';

import LoggedinUsers from './Component/AdminComponents/LoggedInUsers';
import RegisteredUsers from './Component/AdminComponents/RegisteredUsers';
import Stats from './Component/AdminComponents/Stats/Stats';
import Settings from './Component/AdminComponents/Settings/Settings'
import Login from './Login/Login'

import SignIn from './Login/signin'
import SignUp from './Login/signup'

const routes = [
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            { index: true, element: <GroupedList3 /> },
            {
                path: '/agenda',
                element: <Agenda />,
            },
            {
                path: '/vault',
                element: <Vault />,
                // children: [
                //     { index: true, element: <Testpg/> },
                // ]x
            },
            {
                path: '/loggedinUsers',
                element: <LoggedinUsers />
            },
            {
                path: '/registeredusers',
                element: <RegisteredUsers />
            },
            {
                path: '/stats',
                element: <Stats />
            },
            {
                path: '/settings',
                element: <Settings />
            },

            { path: "*", element: <NoMatch /> }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/login2',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    // },
    // // {
    //     path: '/about',
    //     element: <About />,

    //     children: [
    //         { index: true, element: <Testpg /> },
    //         {
    //             path: '/about',
    //             element: <About />,
    //             children: [
    //                 { index: true, element: <About /> },
    //             ]
    //         },
    //         { path: "*", element: <NoMatch /> }
    //     ]

    // },


    { path: "*", element: <NoMatch /> }
]
export default routes;
