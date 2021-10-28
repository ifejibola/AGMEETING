import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useRouteMatch, Switch, Route, BrowserRouter } from "react-router-dom";
import { experimentalStyled } from "@mui/material";

import NavBar from "./NavBar";
import DashboardSidebar from "./DashboardSidebar";
import About from "../../About";

const DashboardLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: "64px",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "280px",
  },
}));

const DashboardLayoutContainer = experimentalStyled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = experimentalStyled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch",
});

const DashboardLayout = () => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    console.log(path);
  });

  return (
    <DashboardLayoutRoot>
      <NavBar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Switch>
              <Route path="/dashboard" exact>
                <div>
                  <p>Here is home page content</p>
                </div>
              </Route>
              <Route path="/dashboard/session" exact> 
                <div>
                  <p>Here is the session information</p>
                </div>
              </Route>
              <Route path="/dashboard/agenda" exact>

              </Route>
              <Route path="/dashboard/vault" exact>

              </Route>
              <Route path="/dashboard/interactions" exact>

              </Route>
            </Switch>
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
