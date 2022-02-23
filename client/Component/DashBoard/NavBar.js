import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import {experimentalStyled} from "@mui/material";
import MenuIcon from '../../icons/Menu';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({theme}) => ({
    ...(theme.palette.mode === 'light' && {
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        color: theme.palette.primary.contrastText
    }),
    ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
    }),
    zIndex: theme.zIndex.drawer + 100
}));

const NavBar = (props) => {
    const {onSidebarMobileOpen, ...other} = props;

    return (
        <DashboardNavbarRoot {...other}>
            <Toolbar sx={{minHeight: 64}}>
                <IconButton
                    color="inherit"
                    onClick={onSidebarMobileOpen}
                    sx={{
                        display: {
                            lg: 'none'
                        }
                    }}
                >
                    <MenuIcon fontSize="small"/>
                </IconButton>
                <RouterLink to="/">
                    <h1>
                        AGMEETING
                    </h1>
                </RouterLink>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2
                    }}
                />
                {/* <LanguagePopover /> */}
                <Box sx={{ml: 1}}>
                    {/* <ContentSearch /> */}
                </Box>
                <Box sx={{ml: 1}}>
                    {/* <ContactsPopover /> */}
                </Box>
                <Box sx={{ml: 1}}>
                    <NotificationsPopover/>
                </Box>
                <Box sx={{ml: 2}}>
                    <AccountPopover/>
                </Box>
            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
