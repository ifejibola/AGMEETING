import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { experimentalStyled } from "@mui/material";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import ReceiptIcon from '@material-ui/icons/Receipt';
// import useAuth from '../../hooks/useAuth';
// ReceiptIcon
import BriefcaseIcon from "../../icons/Briefcase";
import CalendarIcon from "../../icons/Calendar";
import ChartPieIcon from "../../icons/ChartPie";
import ChartSquareBarIcon from "../../icons/ChartSquareBar";
import Lock from "../../icons/Lock";
import ChatAltIcon from "../../icons/ChatAlt";
import ClipboardListIcon from "../../icons/ClipboardList";
import Clock from "../../icons/Clock";
import FolderOpenIcon from "../../icons/FolderOpen";
import MailIcon from "../../icons/Mail";
import ShareIcon from "../../icons/Share";
import ShoppingBagIcon from "../../icons/ShoppingBag";
import ShoppingCartIcon from "../../icons/ShoppingCart";
import UserIcon from "../../icons/User";
import UsersIcon from "../../icons/Users";
import Logo from "../../Logo";
import NavSection from "../../NavSection";
import Scrollbar from "../../Scrollbar";
import Users from "../../icons/Users";
import Cog from "../../icons/Cog";
// import { Receipt } from '@material-ui/icons';
import { connect } from "react-redux";
import { MapStateToPropss } from "react-redux";

import Modal from "./Interactions";
const sectionsMod = [
  {
    title: "General",
    items: [
      // {
      //   title: 'Overview',
      //   path: '/dashboard/overview',
      //   icon: <ChartSquareBarIcon fontSize="small" />
      // },
      {
        title: "Session",
        path: "/",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      {
        title: "Agenda",
        path: "/agenda",
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: "Vault",
        path: "/Vault",
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      {
        title: "Chat",
        path: "/content",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      // {
      //   title: 'Account',
      //   path: '/dashboard/account',
      //   icon: <UserIcon fontSize="small" />
      // }
    ],
  },

  {
    title: "Management",
    items: [
      {
        title: "Users",
        path: "/LoggedinUsers",
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: "Logged In Users",
            path: "/loggedinUsers",
          },
          {
            title: "Registered Users",
            path: "/registeredusers",
          },
          {
            title: "Stats",
            path: "/stats",
          },
          // {
          //   title: 'Edit',
          //   path: '/dashboard/customers/1/edit'
          // }
        ],
      },
      {
        title: "General Settings",
        path: "/settings",
        icon: <ShoppingBagIcon fontSize="small" />,
      },

      // {
      //   title: 'Products',
      //   path: '/dashboard/products',
      //   icon: <ShoppingCartIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/products'
      //     },
      //     {
      //       title: 'Create',
      //       path: '/dashboard/products/new'
      //     }
      //   ]
      // },
      // {
      //   title: 'Orders',
      //   icon: <FolderOpenIcon fontSize="small" />,
      //   path: '/dashboard/orders',
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/orders'
      //     },
      //     {
      //       title: 'Details',
      //       path: '/dashboard/orders/1'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoices',
      //   path: '/dashboard/invoices',
      //   icon: <FolderOpenIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/invoices'
      //     },
      //     {
      //       title: 'Details',
      //       path: '/dashboard/invoices/1'
      //     }
      //   ]
      // }
    ],
  },
];

const sectionsUser = [
  {
    title: "General",
    items: [
      // {
      //   title: 'Overview',
      //   path: '/dashboard/overview',
      //   icon: <ChartSquareBarIcon fontSize="small" />
      // },
      {
        title: "Session",
        path: "/",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      {
        title: "Agenda",
        path: "/agenda",
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: "Vault",
        path: "/Vault",
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      {
        title: "Chat",
        path: "/content",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      // {
      //   title: 'Account',
      //   path: '/dashboard/account',
      //   icon: <UserIcon fontSize="small" />
      // }
    ],
  },
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery("(min-width:980px)");

  useEffect(() => {
    console.log("here in sidebar");
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  // Inter new
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  // temp
  const handleApplyModalOpen = () => {
    setIsApplicationOpen(true);
  };
  // temp
  const handleApplyModalClose = () => {
    setIsApplicationOpen(false);
  };

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
            justifyContent: "center",
            p: 2,
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40,
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "background.default",
              borderRadius: 1,
              display: "flex",
              overflow: "hidden",
              p: 2,
            }}
          >
            <RouterLink to="/dashboard/account">
              <img
                src="https://thispersondoesnotexist.com/image"
                width="50"
                height="50"
              ></img>
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                {props.userReducer?.currentUser?.email}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Your plan:{" "}
                <Link color="primary" component={RouterLink} to="/pricing">
                  {props.userReducer?.currentUser?.email}'s plan
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {props.userReducer.currentUser?.isMod
            ? sectionsMod.map((section) => (
                <NavSection
                  key={section.title}
                  pathname={location.pathname}
                  sx={{
                    "& + &": {
                      mt: 3,
                    },
                  }}
                  {...section}
                />
              ))
            : sectionsUser.map((section) => (
                <NavSection
                  key={section.title}
                  pathname={location.pathname}
                  sx={{
                    "& + &": {
                      mt: 3,
                    },
                  }}
                  {...section}
                />
              ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography color="textPrimary" variant="subtitle2">
            Need Help?
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Check our docs
          </Typography>

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
            backgroundColor: "background.paper",
            height: "calc(100% - 64px) !important",
            top: "64px !Important",
            width: 280,
          },
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
            backgroundColor: "background.paper",
            width: 280,
          },
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
  openMobile: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(DashboardSidebar);
