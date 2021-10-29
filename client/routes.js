import React from 'react';
import Land from './Land';
import About from './About';
import NoMatch from './NoMatch';
import DashboardLayout from "./components/dashboard/Layout";
import InSession from "./components/in-session/InSession";

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
            {path: "*", element: <NoMatch/>}
        ]
    },
    {path: "*", element: <NoMatch/>}
];

export default routes;
