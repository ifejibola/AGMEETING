import React, { useState } from "react";
import {
    Box,
    Card,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    CardHeader,
    Divider, Button,
    Checkbox,
    TextField,
    FormGroup, FormLabel, FormControlLabel, Grid
} from '@material-ui/core';
import { Label } from "@material-ui/icons";

const content = (
    <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 5
        }}>
        <Card variant="outlined"
        sx={{
            width: 500,
            height: 300,
        }}>
            <CardHeader title="Login" align="Center" />
            <Divider />

            <Grid container direction={"column"} spacing={2}>
            <Grid item>
            <div>
            <TextField
                fullWidth
                label="Login"
                id="login"
                placeholder="Login"
                variant="filled"
            /></div></Grid>
            <Grid item>
            <div>
            <TextField
            fullWidth
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                variant="filled"
            /></div></Grid></Grid>

            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Show Password" />
            </FormGroup>

            <Divider />
            <Box textAlign="Right">
                <Button color="primary"
                    size="large"
                    variant="outlined">Login</Button></Box>
        </Card>
    </Box>
);

export default function Land() {

    return (
        <>
            <Card>{content}</Card>
        </>
    );
};
