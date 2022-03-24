import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, Dialog, TextField, Typography, Grid, Divider } from '@mui/material';
import { UploadFile } from "@mui/icons-material";
import axios from 'axios';
// import getInitials from '../../../utils/getInitials';

const AddFileModal = (props) => {
    const { onApply, onClose, open, ...other } = props;
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleApply = () => {
        toast.success('Request sent!');
        if (onApply) {
            onApply();
        }
    };

    const state = {
        selectedFile: null
    };

    const onFileChange = event => {
        useState({ selectedFile: event.target.files[0] });
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            state.selectedFile,
            state.selectedFile.name
        );

        console.log(state.selectedFile);

        axios.post("api/uploadfile", formData);
    };

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Add a File to the Vault
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            onChange={onFileChange}
                        />
                        <Button variant="contained" onClick={onFileUpload}>
                            <UploadFile /> Upload
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Dialog>
    );
};

AddFileModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default AddFileModal;
