import React from 'react';
import Land from './Land';
import About from './About';
import NoMatch from './NoMatch';
import DashboardLayout from "./components/dashboard/Layout";
import InSession from "./components/in-session/InSession";
import Vault from "./components/vault/Vault.js";
import Agenda from "./components/agenda/Agenda.js";

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
            {path: "*", element: <NoMatch/>}
        ]
    },
    {path: "*", element: <NoMatch/>}
];

export default routes;
