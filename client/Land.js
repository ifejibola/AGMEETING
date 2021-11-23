import React from "react";
import {Box, Card, Typography, Grid} from '@material-ui/core';

const content = (
    <Box display="flex"
         justifyContent="center"
         alignItems="center"
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 5
        }}>
        <Grid container
              justifyContent="center"
              alignItems="center"
        >
            <Grid item xs={12}>
                <Typography variant="h2"
                            component="div"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: "600",
                                color: "white",
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
                            }}
                >
                    Welcome to AGMEETING
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p"
                            component="div"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: "600",
                                color: "white",
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
                            }}>
                    Welcome to the AGMEETING software! Please select one of the tabs on the left to get started!
                </Typography>
            </Grid>
        </Grid>
    </Box>
);

export default function Land() {

    return (
        <Box>
            <Card>{content}</Card>
        </Box>
    );
};
