import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { experimentalStyled } from "@mui/material";
import useSettings from "../../hooks/useSettings";
import MenuIcon from "../../icons/Menu";
import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";
import { Button, ButtonGroup } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import {logOut} from "../../login/logout";
import { authenticationService } from "../../../server/services/authentication.service";
import logoAG from "../../../logo/AGMeeting-logo-e1618257409213.png";
// import MenuIcon from '../../icons/Menu';
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import Logo from '../Logo';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === "light" && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === "dark" && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
  zIndex: theme.zIndex.drawer + 100,
}));

const StyledTypography = experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === "light" && {
    color: theme.palette.primary.dark,
  }),
  ...(theme.palette.mode === "dark" && {
    color: theme.palette.primary.light,
  }),
  zIndex: theme.zIndex.drawer + 100,
}));

const NavBar = (props) => {
  const { onSidebarMobileOpen, ...other } = props;
  const { settings } = useSettings();

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    authenticationService.logout();
    navigate("/login");
  };

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: "none",
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <img src={logoAG} width="130" height="60"></img>
        </RouterLink>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
        {/* <LanguagePopover /> */}
        <Box sx={{ ml: 1 }}>{/* <ContentSearch /> */}</Box>
        <Box sx={{ ml: 1 }}>{/* <ContactsPopover /> */}</Box>
        <Box sx={{ ml: 1 }}>
          <NotificationsPopover />
        </Box>

        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
        <Box sx={{ ml: 1 }}>{/* <AccountPopover /> */}</Box>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button href="/file">File</Button>
          <Button href="/edit">Edit</Button>
          <Button href="/view">View</Button>
          <Button href="/help">Help</Button>
          <Button onClick={() => logOut()} href="/login">
            Logout
          </Button>
        </ButtonGroup>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

NavBar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default NavBar;
