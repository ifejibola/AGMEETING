import React, {useState} from "react";
import {
    Box,
    Card,
    Table, TableBody, TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';

const items = [
    {
        title: 'Initial Section',
        items: [
            'Welcome to AGMeeting',
            'Introduce Administrator and Moderator',
            'Discuss Rules',
            'ETC...'
        ]
    },
    {
        title: 'Second Section',
        items: [
            'Meeting Stuff',
            'Motion',
            'ETC...'
        ]
    }
];

const statusOptions = ['In Progress', 'Standing By for Motion', 'Standing by for Second', 'Approved', 'Closed'];

const content = items.map((item) =>
    <Table key={item.title}>
        <TableHead>
            <TableRow>
                <TableCell>
                    <Typography color="textPrimary" variant="h5">{item.title}</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {item.items.map((item) =>
                <TableRow>
                    <TableCell key={item}>
                        <Typography color="textPrimary" variant="subtitle1">{item}</Typography>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
);

const InSession = () => {
        const [status, setStatus] = useState(statusOptions[0]);

        const handleChange = (event) => {
            setStatus(event.target.value);
        };

        return (
            <Box sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                p: 3
            }}>
                <Card>
                    {content}
                </Card>
            </Box>
        );
    }
;

export default InSession;
