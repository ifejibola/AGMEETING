import React from 'react';
//Layout
import DashboardLayout from './Component/DashBoard/Layout';

//Session Components
import Land from './Land';
import GroupedList3 from './Component/Session/Session';
import Agenda from './Component/Agenda/Agenda'
import Vault from './Component/Vault/vault'
import NoMatch from './NoMatch';
import LoggedinUsers from './Component/AdminComponents/LoggedInUsers';
import RegisteredUsers from './Component/AdminComponents/RegisteredUsers';
import Stats from './Component/AdminComponents/Stats/Stats';
import Settings from './Component/AdminComponents/Settings/Settings'

import SignIn from './Login/signin'
import SignUp from './Login/signup'
import ProtectedRoute from "./ProtectedRoute";

const routes = [
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {index: true, element: <GroupedList3/>},
            {
                path: '/agenda',
                element: (
                    <ProtectedRoute>
                        <Agenda/>
                    </ProtectedRoute>
                ),
            },
            {
                path: '/vault',
                element: <Vault/>
            },
            {
                path: '/loggedinUsers',
                element: <LoggedinUsers/>
            },
            {
                path: '/registeredusers',
                element: <RegisteredUsers/>
            },
            {
                path: '/stats',
                element: <Stats/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
            {
                path: '/login',
                element: <SignIn/>
            },
            {
                path: '/register',
                element: <SignUp/>
            },
            {path: "*", element: <NoMatch/>}
        ]
    },
    {path: "*", element: <NoMatch/>}
]
export default routes;
