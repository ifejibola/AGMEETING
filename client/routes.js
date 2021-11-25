import React from "react";
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from "@mui/material/styles";

import App from './App';
import Table1 from './Component/DashBoard/Tables/Table1'
import Land from './Land';
import DashboardLayout from './Component/DashBoard/Layout';
import About from './About';
import NoMatch from './NoMatch';
import Testpg from './anothertestpg';
import Table from './Component/DashBoard/Tables/Table'
import EventDetails from "./Component/DashBoard/Events/EventDetails";
import List from './List'
import ContentMessage from './ContentMessage';
import InteractionPanel from "./Interactions";


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
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'table1',
                element: <Table1 />
            },
            {
                path: 'event-manage',
                element: <EventDetails />,
            },
            {
                path: 'test',
                element: <Testpg />,
                // children: [
                //     { index: true, element: <Testpg/> },
                // ]x
            },
            {
                path: 'table',
                element: <Table />,
            },
            {
                path: 'list',
                element: <List />,
            },
            {
                path: 'ContentMessage',
                element: <ContentMessage />,
            },
            {
                path: "interaction",
                element: <InteractionPanel />,
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

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
