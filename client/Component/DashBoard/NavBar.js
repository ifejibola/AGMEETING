import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { experimentalStyled } from "@mui/material";
import useSettings from '../../hooks/useSettings';
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

const StyledTypography = experimentalStyled(Typography)(({ theme }) => ({
    ...(theme.palette.mode === 'light' && {
        color: theme.palette.primary.contrastText
    }),
    ...(theme.palette.mode === 'dark' && {
        color: "#919eab"
    }),
    zIndex: theme.zIndex.drawer + 100
}));

const NavBar = (props) => {
    const { onSidebarMobileOpen, ...other } = props;
    const {settings} = useSettings();

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
                <RouterLink to="/dashboard">
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
                <StyledTypography variant="h2">AGMEETING</StyledTypography>
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
            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
