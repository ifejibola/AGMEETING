import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from '@mui/material/styles';

import App from './App';

import Land from './Land';
import DashboardLayout from './Component/DashBoard/Layout';
import About from './About';
import NoMatch from './NoMatch';
import Testpg from './anothertestpg';
import Table from './Table'


// // Declarative routing model v5
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//             <Route path="/about" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model v6
const routes = [
    // { path: '/', element: <Land /> },
    // {
    //     path: 'about',
    //     element: <About />,
    //     children: [
    //         {
    //             path: '/about', element: <NoMatch />
    //         }
    //     ]
    // },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Land /> },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/test',
                element: <Testpg />,
                // children: [
                //     { index: true, element: <Testpg/> },
                // ]x
            },
            {
                path: 'dashboard/table',
                element: <Table />,
                // children: [
                //     { index: true, element: <Testpg/> },
                // ]x
            },
            { path: "*", element: <NoMatch /> }
        ]
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

// export default Routes;
export default routes;