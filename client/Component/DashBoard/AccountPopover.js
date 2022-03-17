import React from 'react'
import {useRef, useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {toast} from 'material-react-toastify';
import {
    Avatar,
    Box,
    Button,
    ButtonBase,
    Divider,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Popover,
    Typography
} from "@mui/material";
import CogIcon from '../../icons/Cog';
import UserIcon from '../../icons/User';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from "../../actions/auth";

const AccountPopover = () => {
    const anchorRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const {user} = useSelector((state) => state.auth);

    let userName;
    if (user.firstName || user.lastName) {
        userName = (user.firstName ? user.firstName : '') + (user.lastName ? ' ' + user.lastName : '');
    } else {
        userName = 'USER #' + user.id;
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        try {
            handleClose();
            if (user) {
                dispatch(logout()).then(() => {
                    navigate('/');
                    toast.success('You have successfully logged out.');
                });
            } else {
                toast.error('You are currently not logged in.');
            }
        } catch (err) {
            console.error(err);
            toast.error('Unable to logout.');
        }
    };

    return (
        <>
            <Box
                component={ButtonBase}
                onClick={handleOpen}
                ref={anchorRef}
                sx={{
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                <Avatar
                    sx={{
                        height: 32,
                        width: 32
                    }}
                />
            </Box>
            <Popover
                anchorEl={anchorRef.current}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom'
                }}
                keepMounted
                onClose={handleClose}
                open={open}
                PaperProps={{
                    sx: {width: 240}
                }}
            >
                <Box sx={{p: 2}}>
                    <Typography
                        color="textPrimary"
                        variant="subtitle2"
                    >
                        {userName}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="subtitle2"
                    >
                        {user.email}
                    </Typography>
                </Box>
                <Divider/>
                <Box sx={{mt: 2}}>
                    <MenuItem
                        component={RouterLink}
                        to="/dashboard/social/profile"
                    >
                        <ListItemIcon>
                            <UserIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={(
                                <Typography
                                    color="textPrimary"
                                    variant="subtitle2"
                                >
                                    Profile
                                </Typography>
                            )}
                        />
                    </MenuItem>
                    <MenuItem
                        component={RouterLink}
                        to="/dashboard/account"
                    >
                        <ListItemIcon>
                            <CogIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={(
                                <Typography
                                    color="textPrimary"
                                    variant="subtitle2"
                                >
                                    Settings
                                </Typography>
                            )}
                        />
                    </MenuItem>
                </Box>
                <Box sx={{p: 2}}>
                    <Button
                        color="primary"
                        fullWidth
                        onClick={handleLogout}
                        variant="outlined"
                    >
                        Logout
                    </Button>
                </Box>
            </Popover>
        </>
    );
};

export default AccountPopover;
