import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Box, IconButton, Toolbar, Typography, Button, Menu, MenuItem} from '@mui/material';
import {experimentalStyled} from "@mui/material";

// import MenuIcon from '../../icons/Menu';
// import AccountPopover from './AccountPopover';
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import Logo from '../Logo';
// import NotificationsPopover from './NotificationsPopover';


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
                    {/* <MenuIcon fontSize="small" /> */}
                </IconButton>
                <RouterLink to="/" style={{textDecoration: 'none', color: '#FFF'}}>
                    {/* <Logo
                      sx={{
                        display: {
                        lg: 'inline',
                         xs: 'none'
                        },
                    height: 40,
                     width: 40
                     }}
                    /> */}
                    <Typography color="textPrimary" variant="h2">AGMEETING</Typography>

                </RouterLink>

                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2
                    }}
                />
                {/* <LanguagePopover /> */}

                <Box sx={{ml: 2}}>
                    <RouterLink
                        to="/login"
                    >
                        <Button><Typography color="textPrimary">Login</Typography></Button>
                    </RouterLink>
                </Box>

                <Box sx={{ml: 2}}>
                    <RouterLink
                        to="/register"
                    >
                        <Button><Typography color="textPrimary">Register</Typography></Button>
                    </RouterLink>
                </Box>

                <Box sx={{ml: 2}} style={{}}>
                    <Button><Typography color="textPrimary">File</Typography></Button>
                </Box>

                <Box sx={{ml: 2}}>
                    <Button><Typography color="textPrimary">Edit</Typography></Button>
                </Box>

                <Box sx={{ml: 2}}>
                    <Button><Typography color="textPrimary">View</Typography></Button>
                </Box>

                <Box sx={{ml: 2}}>
                    <Button><Typography color="textPrimary">Help</Typography></Button>
                </Box>


            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
