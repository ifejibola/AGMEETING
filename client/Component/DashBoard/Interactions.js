import React, {useState} from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import {Close} from '@material-ui/icons';
import {
    Box,
    Button,
    Dialog,
    Typography,
    Divider
} from "@mui/material";

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
        <Dialog maxWidth="sm" onClose={onClose} open={open} {...other}>
            <Box sx={{p: 3}}>

                <Grid container justifyContent="flex-end">
                    <Button startIcon={<Close/>} onClick={onClose}/>
                </Grid>

                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Interaction
                    <Grid item xs={12}>
                        <Divider variant='fullWidth'/>
                    </Grid>
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

                        <Grid item xs={12}>
                            <Divider variant='fullWidth'/>
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth color="success">
                                Comment FOR
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth color="error">
                                Comment AGAINST
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth color="warning">
                                Withdraw Comment
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider variant='fullWidth'/>
                        </Grid>

                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Point of Information
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Point of Privilege
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Point of Order
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Recess
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Table
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="info">
                                Amend
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider variant='fullWidth'/>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Ready to Vote
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="success">
                                Vote YES
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="error">
                                Vote NO
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth color="warning">
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
