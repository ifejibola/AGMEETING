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
        Title: 'Vote'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd1',
        Title: 'Out of'
    },
];

const emailOptions = [
    'QUICK',
    'STANDARD',
    'OPEN'
];

const VoteSetting = () => {
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
                <CardHeader title="Select Voting Mode" />
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
                    <Box sx={{ mt: 2 }}>
                        {/* <Button
                            color="primary"
                            startIcon={<MailIcon fontSize="small" />}
                            variant="contained"
                        >
                            Send email
                        </Button> */}
                    </Box>
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

export default VoteSetting;
