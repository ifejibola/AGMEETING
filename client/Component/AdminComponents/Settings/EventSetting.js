import React from 'react'
import { useState } from 'react';
import { format, subDays, subHours, subMinutes } from 'date-fns';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import MailIcon from '../../../icons/Mail';

const now = new Date();

const emails = [
    {
        id: '5ece2ce3613486d95ffaea58',
        Title: 'Meeting Chair'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd1',
        Title: 'Place'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd2',
        Title: 'Year'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd3',
        Title: 'Comments per User'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd4',
        Title: 'Number of For'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd5',
        Title: 'Time of Each Comment'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd6',
        Title: 'Number Of AGAINST'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd7',
        Title: 'Times Per User Item'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd8',
        Title: 'Voting Session'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd9',
        Title: 'Comment Session'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd10',
        Title: 'Call for a Vote'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd11',
        Title: 'Notification Time'
    },

];

const emailOptions = [
    'Resend last invoice',
    'Send password reset',
    'Send verification'
];

const EventSetting = () => {
    const [emailOption, setEmailOption] = useState(emailOptions[0]);

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                p: 3
            }}
        >
            <Card>
                <CardHeader title="Event Name" />
                <Divider />
                <CardContent>
                    <TextField
                        fullWidth
                        name="option"
                        onChange={(event) => setEmailOption(event.target.value)}
                        select
                        SelectProps={{ native: true }}
                        value={emailOption}
                        variant="outlined"
                    >
                        {emailOptions.map((option) => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </TextField>
                    {/* <Box sx={{ mt: 2 }}>
                        <Button
                            color="primary"
                            startIcon={<MailIcon fontSize="small" />}
                            variant="contained"
                        >
                            Send email
                        </Button>
                    </Box> */}
                    <Box sx={{ mt: 2 }}>
                        <Table>
                            <TableBody>
                                {emails.map((email) => (
                                    <TableRow key={email.id}>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {email.Title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                fullWidth
                                                name="option"
                                                onChange={(event) => setEmailOption(event.target.value)}
                                                select
                                                SelectProps={{ native: true }}
                                                value={emailOption}
                                                variant="outlined"
                                            >
                                                {emailOptions.map((option) => (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default EventSetting;
