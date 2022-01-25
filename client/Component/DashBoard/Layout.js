import React from "react";
import {useState} from "react";
import {Link, Outlet} from 'react-router-dom'
import {experimentalStyled} from "@mui/material";

import NavBar from './NavBar';
import DashboardSidebar from "./DashboardSidebar";


const DashboardLayoutRoot = experimentalStyled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
}));

const DashboardLayoutWrapper = experimentalStyled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: '64px',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '280px'
    }
}));

const DashboardLayoutContainer = experimentalStyled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    position: 'relative',
    WebkitOverflowScrolling: 'touch'
});

const DashboardLayout = () => {
    const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

    return (
        <DashboardLayoutRoot>
            <NavBar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)}/>
            <DashboardSidebar
                onMobileClose={() => setIsSidebarMobileOpen(false)}
                openMobile={isSidebarMobileOpen}
            />
            <DashboardLayoutWrapper>
                <DashboardLayoutContainer>
                    <DashboardLayoutContent>
                        <Outlet/>
                    </DashboardLayoutContent>
                </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    );
};

export default DashboardLayout;
