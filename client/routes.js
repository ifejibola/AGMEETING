import React from "react";

//Layout
import DashboardLayout from "./Component/DashBoard/Layout";

//Session Components
import Land from "./Land";
import GroupedList3 from "./Component/Session/Session";
import Agenda from "./Component/Agenda/agenda";
import Vault from "./Component/Vault/vault";

import About from "./About";
import NoMatch from "./NoMatch";
import Testpg from "./anothertestpg";

import LoggedinUsers from "./Component/AdminComponents/LoggedInUsers";
import RegisteredUsers from "./Component/AdminComponents/RegisteredUsers";
import Stats from "./Component/AdminComponents/Stats/Stats";
import Settings from "./Component/AdminComponents/Settings/Settings";
import Login from "./Login/Login";

import SignIn from "./Login/signin";
import SignUp from "./Login/signup";
import ProtectedRoute from "./ProtectedRoute";

import ContentMessage from "./Component/ContentMessage.js";
import ModeratorRoute from "./ModeratorRoute";

// // Declarative routing model
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model this basically contains all the routes for the applications, new routes must be added to this array after the components are created.
const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <GroupedList3 /> },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/content",
        element: <ContentMessage />,
      },
      {
        path: "/vault",
        element: <Vault />,
      },
      {
        path: "/loggedinUsers",
        element: (
          <ModeratorRoute>
            <LoggedinUsers />
          </ModeratorRoute>
        ),
      },
      {
        path: "/registeredusers",
        element: (
          <ModeratorRoute>
            <RegisteredUsers />
          </ModeratorRoute>
        ),
      },
      {
        path: "/stats",
        element: (
          <ModeratorRoute>
            <Stats />
          </ModeratorRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ModeratorRoute>
            <Settings />
          </ModeratorRoute>
        ),
      },

      { path: "*", element: <NoMatch /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
