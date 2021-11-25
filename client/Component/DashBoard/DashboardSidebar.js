import React, { useEffect } from "react";
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
import ChatAltIcon from "../../icons/ChatAlt";
import ClipboardListIcon from "../../icons/ClipboardList";
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
// import { Receipt } from '@material-ui/icons';

const sections = [
  {
    title: "Tables",
    items: [
      {
        title: "Table",
        path: "/dashboard/table",
        icon: <ClipboardListIcon fontSize="small" />,
      },
      {
        title: 'Table1',
        path: '/dashboard/table1',
        icon: <ClipboardListIcon fontSize="small" />
      },
    ],
  },
  {
    title: 'Events',
    items: [
      {
        title: 'Event Management',
        path: '/dashboard/event-manage',
        icon: <ClipboardListIcon fontSize="small" />
      }
    ]
  },
   {
    title: 'List',
    items: [
      {
        title: 'List',
        path: '/dashboard/list',
        icon: <ClipboardListIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Content',
    items: [
      {
        title : 'Content',
        path: '/dashboard/ContentMessage',
        icon: <ClipboardListIcon fontSize="small" />
      }
    ]
  },
  {
    title: "Interaction",
    items: [
      {
        title: "Interaction",
        path: "/dashboard/interaction",
        icon: <ClipboardListIcon fontSize="small" />,
      },
    ],
  },
  ];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

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
              <Typography color="textPrimary" variant="subtitle2">
                {/* {user.name} */} User Name
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Your plan:{" "}
                <Link color="primary" component={RouterLink} to="/pricing">
                  {/* {user.plan} */}You plan....fjkldjskjfkdsjklfj lorem
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
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
