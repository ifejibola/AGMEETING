import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, Drawer, Link, Typography, useMediaQuery } from '@mui/material';
import { experimentalStyled } from "@mui/material";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import ReceiptIcon from '@material-ui/icons/Receipt';
// import useAuth from '../../hooks/useAuth';
// ReceiptIcon
import BriefcaseIcon from '../../icons/Briefcase';
import CalendarIcon from '../../icons/Calendar';
import ChartPieIcon from '../../icons/ChartPie';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import Lock from '../../icons/Lock';
import ChatAltIcon from '../../icons/ChatAlt';
import ClipboardListIcon from '../../icons/ClipboardList';
import Clock from '../../icons/Clock';
import FolderOpenIcon from '../../icons/FolderOpen';
import MailIcon from '../../icons/Mail';
import ShareIcon from '../../icons/Share';
import ShoppingBagIcon from '../../icons/ShoppingBag';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UserIcon from '../../icons/User';
import UsersIcon from '../../icons/Users';
import Logo from '../../Logo';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
import Users from '../../icons/Users';
import Cog from '../../icons/Cog';
// import { Receipt } from '@material-ui/icons';

const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Overview',
        path: '/dashboard/overview',
        icon: <ChartSquareBarIcon fontSize="small" />
      },
      {
        title: 'Session',
        path: '/dashboard/session',
        icon: <Clock fontSize="small"/>
      },
      {
        title: 'Agenda',
        path: '/dashboard/agenda',
        icon: <ClipboardListIcon fontSize="small" />
      },
      {
        title: 'Vault',
        path: '/dashboard/vault',
        icon: <Lock fontSize="small" />
      },
      {
        title: 'Interactions',
        path: '/dashboard/interactions',
        icon: <Users fontSize="small" />
      },
      {
        title: 'General Settings',
        path: '/dashboard/settings',
        icon: <Cog fontSize="small" />
      }
    ]
  },
  // {
  //   title: 'Management',
  //   items: [
  //     {
  //       title: 'Customers',
  //       path: '/dashboard/customers',
  //       icon: <UsersIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/customers'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/customers/1'
  //         },
  //         {
  //           title: 'Edit',
  //           path: '/dashboard/customers/1/edit'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Products',
  //       path: '/dashboard/products',
  //       icon: <ShoppingCartIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/products'
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/products/new'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Orders',
  //       icon: <FolderOpenIcon fontSize="small" />,
  //       path: '/dashboard/orders',
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/orders'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/orders/1'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Invoices',
  //       path: '/dashboard/invoices',
  //       icon: <FolderOpenIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/invoices'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/invoices/1'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Platforms',
  //   items: [
  //     {
  //       title: 'Projects',
  //       path: '/dashboard/projects',
  //       icon: <BriefcaseIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Browse',
  //           path: '/dashboard/projects/browse'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/projects/1'
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/projects/new'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Social',
  //       path: '/dashboard/social',
  //       icon: <ShareIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Profile',
  //           path: '/dashboard/social/profile'
  //         },
  //         {
  //           title: 'Feed',
  //           path: '/dashboard/social/feed'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Apps',
  //   items: [
  //     {
  //       title: 'Kanban',
  //       path: '/dashboard/kanban',
  //       icon: <ClipboardListIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Mail',
  //       path: '/dashboard/mail',
  //       icon: <MailIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Chat',
  //       path: '/dashboard/chat',
  //       icon: <ChatAltIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Calendar',
  //       path: '/dashboard/calendar',
  //       icon: <CalendarIcon fontSize="small" />
  //     }
  //   ]
  // }
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery('(min-width:980px)');

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

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
              Avatar
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
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button>
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
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
