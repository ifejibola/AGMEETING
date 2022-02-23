import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Divider, Drawer, useMediaQuery, Typography, Button, Modal, Grid, Card} from '@mui/material';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
import {AccountBalance, EventNote, PanTool, Person, VerifiedUser, VpnKey, Settings, HowToReg, Chat, PieChart, Ballot} from "@mui/icons-material";



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
            }/*,
            {
                title: 'Interactions',
                path: '/interactions',
                icon: <PanTool fontSize="small"/>
            }*/
        ]
    },
    {
        title: 'For Peer Testing Purposes',
        items: [
            {
                title: 'Registered Users',
                path: '/registered-users',
                icon: <Person fontSize="small"/>
            },
            {
                title: 'Logged In Users',
                path: '/logged-in-users',
                icon: <VerifiedUser fontSize="small"/>
            },
            {
                title: 'Stats',
                path: '/stats',
                icon: <PieChart fontSize="small"/>
            },
            {
                title: 'Content Message',
                path: '/ContentMessage',
                icon: <Chat fontSize="small"/>
            }
        ]
    },
    {
        title: 'Accessibility',
        items: [
            {
                title: 'Settings',
                path: '/settings',
                icon: <Settings fontSize="small"/>
            },
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 20,
        p: 3,
    };

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

                    {/*}
                    <Button onClick={handleOpen} startIcon={<HowToReg />}>Roll Call</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-title" variant="h6" component="h2">
                                Participant List
                            </Typography>
                            <Typography id="modal-description" sx={{ mt: 2 }}>
                                <Typography>
                                    1. Kim
                                </Typography>
                                <Typography>
                                    2. Brian
                                </Typography>
                                <Typography>
                                    3. Care
                                </Typography>
                                <Typography>
                                    ...
                                </Typography>
                                <Typography>
                                    Quorum: 11% / Minimum: 50%
                                </Typography>
                            </Typography>
                            <Button onClick={handleClose}>Close</Button>
                        </Box>
                    </Modal>
                    <Button onClick={handleOpen} startIcon={<Ballot />}>Votes</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-title2"
                        aria-describedby="modal-description2"
                    >
                        <Box sx={style}>
                            <Typography id="modal-title2" variant="h6" component="h2">
                                Vote Count
                            </Typography>
                            <Typography id="modal-description2" sx={{ mt: 2 }}>
                                <Typography>
                                    VOTED YES: 44
                                </Typography>
                                <Typography>
                                    VOTED NO: 55
                                </Typography>
                                <Typography>
                                    ABSTAIN: 3
                                </Typography>
                            </Typography>
                            <Button onClick={handleClose}>Close</Button>
                        </Box>
                    </Modal>
*/}
                    <Button 
                    color="primary"
                    onClick={handleOpen}
                    fullWidth
                    sx={{ mt: 2 }}
                    to="#"
                    variant="contained"
                    >Interactions</Button>
                    <Modal
                        centered
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-title3"
                        aria-describedby="modal-description3"
                    >
                        <Card >
                        <Box sx={style}>
                            <Typography
                            id="modal-title3"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                            variant="h4"
                            >
                            Interaction
                            </Typography>
                                <Box id="modal-description3" sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                    <Button variant="contained" fullWidth="true">
                                        Motion Item
                                    </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Button variant="contained" fullWidth="true">
                                        Second Item
                                    </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Button variant="contained" fullWidth="true">
                                        Comment FOR
                                    </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Button variant="contained" fullWidth="true">
                                        Comment AGAINST
                                    </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Button variant="contained" fullWidth="true">
                                        Withdraw Comment
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Point of Information
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Point of Privilege
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Point of Order
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Recess
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Table
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Amend
                                    </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Button variant="contained" fullWidth="true">
                                        Ready to Vote
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Vote YES
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Vote NO
                                    </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Button variant="contained" fullWidth="true">
                                        Abstain
                                    </Button>
                                    </Grid>
                                </Grid>
                                </Box>
                            </Box>
                            </Card>
                    </Modal>
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
