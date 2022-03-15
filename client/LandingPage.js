import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {BrowserRouter, Route, Link} from 'react-router-dom';


function LandingPage() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const centerStyle = {
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh",
        textAlign: "center",
        margin: "auto"
    };
  return (
      <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            AGMEETING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link
                    key="Home"
                    to="/"
                >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                </Link>
                <Link
                    key="About"
                    to="/about"
                    
                >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>About</Button>
                </Link>
                <Link
                    key="login"
                    to="/login"
                >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                </Link>
            </Box>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div style={{
        backgroundImage: "url(" + "https://agmeeting.ncra.ca/wp-content/uploads/2017/05/bigstock-145831646.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '90vh'}}>
            <Box >
             <Box style={{centerStyle}} m="auto">
                <h1><Typography>Welcome to AGMEETING</Typography></h1>
                <Link
                    key="learnmore"
                    to="/about"
                >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }} style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>Learn more</Button>
                </Link>
                <Link
                    key="login"
                    to="/login"
                    
                >
                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                </Link>
            </Box>
            </Box>
    </div>
    
    </>
  );
}

export default LandingPage;

