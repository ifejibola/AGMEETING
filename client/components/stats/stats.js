import React, { useState } from "react";
import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Paper,
    Typography,
    Link,
    IconButton
} from '@material-ui/core';
import DotsHorizontalIcon from '../../icons/DotsHorizontal';

const now = new Date();

const connections = [
    {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        commonConnections: 'I believe Smith should be the moderator because he has good experience in doing it last year and did a good job.',
        name: 'Carson Darrin',
        status: 'Rejected'
    },
    {
        id: '5e887b209c28ac3dd97f6db5',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        commonConnections: 8,
        name: 'Fran Perez',
        status: 'Pending'
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        commonConnections: 5,
        name: 'Miron Vitold',
        status: 'Accepted'
    }
];

const Stats = () => {

    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>

            <Grid
                container
                spacing={3}
            >
                {connections.map((connection) => (
                    <Grid
                        item
                        key={connection.id}
                        xs={12}
                    >
                        <Paper variant="outlined">
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    p: 2
                                }}
                            >

                                <Avatar
                                    src={connection.avatar}
                                    sx={{
                                        height: 100,
                                        width: 100
                                    }}
                                />
                                {connection.name}
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                    display="block"
                                >
                                    {connection.commonConnections}
                                    {' '}
                                    connections in common
                                    </Typography>
                                <Button
                                    color="primary"
                                    size="small"
                                    variant="outlined"
                                >
                                    {connection.status}
                                </Button>
                                <IconButton>
                                    <DotsHorizontalIcon fontSize="small" />
                                </IconButton>

                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Stats;
