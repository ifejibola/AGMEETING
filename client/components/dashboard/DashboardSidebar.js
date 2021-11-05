import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Divider, Drawer, useMediaQuery} from '@mui/material';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
import {AccountBalance, EventNote, PanTool, VpnKey} from "@mui/icons-material";

const sections = [
    {
        title: 'General',
        items: [
            {
                title: 'In Session',
                path: '/session',
                icon: <AccountBalance fontSize="small"/>
            },
            {
                title: 'Agenda',
                path: '/agenda',
                icon: <EventNote fontSize="small"/>
            },
            {
                title: 'Vault',
                path: '/vault',
                icon: <VpnKey fontSize="small"/>
            },
            {
                title: 'Interactions',
                path: '/interactions',
                icon: <PanTool fontSize="small"/>
            }
        ]
    }
];

const DashboardSidebar = (props) => {
    const {onMobileClose, openMobile} = props;
    const location = useLocation();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

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
            <Scrollbar options={{suppressScrollX: true}}>
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
                </Box>
                <Divider/>
                <Box sx={{p: 2}}>
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
