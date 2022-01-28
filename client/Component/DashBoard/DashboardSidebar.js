import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Link, Typography, useMediaQuery } from '@mui/material';
import ChartPieIcon from '../../icons/ChartPie';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import ShoppingBagIcon from '../../icons/ShoppingBag';
import UsersIcon from '../../icons/Users';
import Logo from '../../Logo';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
import Modal from './Interactions'
const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Session',
        path: '/',
        icon: <ChartSquareBarIcon fontSize="small" />
      },
      {
        title: 'Agenda',
        path: '/agenda',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: 'Vault',
        path: '/Vault',
        icon: <ShoppingBagIcon fontSize="small" />
      }
    ]
  },

  {
    title: 'Management',
    items: [
      {
        title: 'Users',
        path: '/LoggedinUsers',
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: 'Logged In Users',
            path: '/loggedinUsers'
          },
          {
            title: 'Registered Users',
            path: '/registeredusers'
          },
          {
            title: 'Stats',
            path: '/stats'
          }
        ]
      },
      {
        title: 'General Settings',
        path: '/settings',
        icon: <ShoppingBagIcon fontSize="small" />
      }
    ]
  }
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const handleApplyModalOpen = () => {
    setIsApplicationOpen(true);
  };
  const handleApplyModalClose = () => {
    setIsApplicationOpen(false);
  };


  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <RouterLink to="/dashboard/account">
              {/* <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48
                }}
              /> */}
              Avater
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {/* {user.name} */} User Name
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Your plan:
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/pricing"
                >
                  {/* {user.plan} */}You plan....fjkldjskjfkdsjklfj
                  lorem
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            Need Help?
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Check our docs
          </Typography>
          {/* <Button
            color="primary"
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button> */}

          <Button
            color="primary"
            onClick={handleApplyModalOpen}
            fullWidth
            sx={{ mt: 2 }}
            to="#"
            variant="contained"
          >
            Interactions
          </Button>
          <Modal
            onApply={handleApplyModalClose}
            onClose={handleApplyModalClose}
            open={isApplicationOpen}
          />
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <>
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            width: 280
          }
        }}
        variant="temporary"
      >
        {content}
      </Drawer>
      <Modal
        onApply={handleApplyModalClose}
        onClose={handleApplyModalClose}
        open={isApplicationOpen}
      />
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
