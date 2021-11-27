import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { experimentalStyled } from "@mui/material";
import { Button, ButtonGroup } from '@mui/material';
// import MenuIcon from '../../icons/Menu';
// import AccountPopover from './AccountPopover';
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import Logo from '../Logo';
// import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
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
    const { onSidebarMobileOpen, ...other } = props;

    return (
        <DashboardNavbarRoot {...other}>
            <Toolbar sx={{ minHeight: 64 }}>
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
                <RouterLink to="/">
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
                </RouterLink>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2
                    }}
                />
                {/* <LanguagePopover /> */}
                <Box sx={{ ml: 1 }}>
                    {/* <ContentSearch /> */}
                </Box>
                <Box sx={{ ml: 1 }}>
                    {/* <ContactsPopover /> */}
                </Box>
                <Box sx={{ ml: 1 }}>
                    {/* <NotificationsPopover /> */}
                </Box>
                <Box sx={{ ml: 2 }}>
                    {/* <AccountPopover /> */}
                </Box>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button href='/file'>File</Button>
                    <Button href='/edit'>Edit</Button>
                    <Button href='/view'>View</Button>
                    <Button href='/help'>Help</Button>
                    <Button href='/signin'>Login</Button>
                </ButtonGroup>
            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
