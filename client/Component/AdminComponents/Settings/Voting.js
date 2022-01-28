import React from 'react'
import { useState } from 'react';
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

const now = new Date();

const fields = [
    {
        id: '5ece2ce3613486d95ffaea58',
        Title: 'Vote'
    },
    {
        id: '5ece2ce8cebf7ad1d100c0cd1',
        Title: 'Out of'
    },
];

const voteOptions = [
    'QUICK',
    'STANDARD',
    'OPEN'
];

const VoteSetting = () => {
    const [voteOption, setVoteOption] = useState(voteOptions[0]);

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
                        onChange={(event) => setVoteOption(event.target.value)}
                        select
                        SelectProps={{ native: true }}
                        value={voteOption}
                        variant="outlined"
                    >
                        {voteOptions.map((option) => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <Box sx={{ mt: 2 }}>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Table>
                            <TableBody>
                                {fields.map((field) => (
                                    <TableRow key={field.id}>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {field.Title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                fullWidth
                                                name="option"
                                                onChange={(event) => setVoteOption(event.target.value)}
                                                select
                                                SelectProps={{ native: true }}
                                                value={voteOption}
                                                variant="outlined"
                                            >
                                                {voteOptions.map((option) => (
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
