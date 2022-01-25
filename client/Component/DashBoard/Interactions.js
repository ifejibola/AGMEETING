import React, {useState} from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import {
    Avatar,
    Box,
    Button,
    Dialog,
    TextField,
    Typography,
} from "@mui/material";
// import getInitials from '../../../utils/getInitials';

const Modal = (props) => {
    const {authorAvatar, authorName, onApply, onClose, open, ...other} = props;
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleApply = () => {
        toast.success("Request sent!");

        if (onApply) {
            onApply();
        }
    };

    return (
        <Dialog maxWidth="md" onClose={onClose} open={open} {...other}>
            <Box sx={{p: 3}}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Interaction
                </Typography>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth>
                                Motion Item
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth>
                                Second Item
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth>
                                Comment FOR
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth>
                                Comment AGAINST
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Withdraw Comment
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Point of Information
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Point of Privilege
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Point of Order
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Recess
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Table
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Amend
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Ready to Vote
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Vote YES
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Vote NO
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth>
                                Abstain
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Dialog>
    );
};

Modal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
};

export default Modal;
