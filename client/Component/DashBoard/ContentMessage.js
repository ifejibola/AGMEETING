import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardHeader,
    Dialog,
    Divider,
    IconButton,
    Grid,
    Typography,
    TextField,
    Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import axios from "axios";
import {useSelector} from "react-redux";
import {toast} from "material-react-toastify";


const ContentMessage = (props) => {
    const {onClose, onApply, open, ...other} = props;
    const {user} = useSelector((state) => state.auth);
    let menuOptions;
    if (user && user.isModerator) {
        menuOptions = [
            'General Message',
            'Message to Meeting Room'
        ];
    } else {
        menuOptions = ['Message to Meeting Room'];
    }
    const [menuOption, setMenuOption] = useState(menuOptions[0]);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const sendMessage = () => {
        if (menuOption === 'General Message') {
            axios.post('http://localhost:3000/api/chat', {
                message: value,
                meetingId: user.meetingId,
                isGeneral: true
            }, {withCredentials: true}).then(() => {
                onClose();
            }).catch((err) => {
                toast.error(err.response.data.message);
            });
        } else {
            axios.post('http://localhost:3000/api/chat', {
                message: value,
                meetingId: user.meetingId,
                isGeneral: false
            }, {withCredentials: true}).then(() => {
                onClose();
            }).catch((err) => {
                toast.error(err.response.data.message);
            });
        }
        setValue('');
    }

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    p: 3
                }}
            >
                <Card>
                    <CardHeader
                        action={(
                            <Grid container>
                                <Grid item>
                                    <IconButton>
                                        <HelpOutlineIcon fontSize="small"/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={onClose}>
                                        <CloseIcon fontSize="small"/>
                                    </IconButton>
                                </Grid>
                            </Grid>


                        )}
                        title="Content Messages"
                    />
                    <Divider/>
                    <Box sx={{p: 2,}}>
                        <Typography
                            align="center"
                            color="textSecondary"
                            variant="subtitle2"
                        >
                            Please enter the message you wish to send.
                        </Typography>
                        <Box sx={{mt: 3}}>
                            <TextField
                                autoFocus
                                FormHelperTextProps={{
                                    sx: {
                                        textAlign: 'right',
                                        mr: 0
                                    }
                                }}
                                fullWidth
                                helperText={`${200 - value.length} characters left`}
                                label="Message"
                                multiline
                                onChange={handleChange}
                                placeholder="Message Contents"
                                rows={5}
                                value={value}
                                variant="outlined"
                            />

                        </Box>
                        <Box
                            sx={{
                                mt: 3,
                                p: 3
                            }}
                        >
                            <Grid container spacing={4}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        name="option"
                                        onChange={(event) => setMenuOption(event.target.value)}
                                        select
                                        SelectProps={{native: true}}
                                        value={menuOption}
                                        variant="outlined"
                                    >
                                        {menuOptions.map((option) => (
                                            <option
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        onClick={sendMessage}
                                        variant="contained"
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Dialog>

    );
};

ContentMessage.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default ContentMessage;
