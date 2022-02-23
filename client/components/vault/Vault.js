import React, {useState} from "react";
import {
    Box,
    Card,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    CardHeader,
    Divider, Button
} from '@material-ui/core';
import {Label} from "@material-ui/icons";

const elems = [
    {
        id: '4be0679f811115c9d2d28497',
        agendaItem: "Weekly Report",
        viewed: "Yes",
        createdAt: 'Jan 23 2021',
        name: 'Weekly budget',
        filetype: 'PDF',
        status: 'draft',
        author: 'David'
    },
    {
        id: '4e1cd375bfa59e4347404e20',
        agendaItem: "New Employees",
        viewed: "Yes",
        createdAt: 'Feb 1 2021',
        name: 'New Prospects Blog',
        filetype: 'PDF',
        status: 'active',
        author: 'Cheryl'
    },
    {
        id: '6b37fdf83195ca7e36622040',
        agendaItem: "Finances",
        viewed: "No",
        createdAt: 'Feb 5 2021',
        name: 'Fiscal Projections',
        filetype: 'Spreadsheet',
        status: 'stopped',
        author: 'Candace'
    },
    {
        id: 'e3651f8f9565cdbe8d2e5fea',
        agendaItem: "Marketing plan",
        viewed: "Yes",
        createdAt: 'Feb 1 2021',
        name: 'Best Marketing Course Online',
        filetype: 'Report',
        status: 'draft',
        author: 'Perry'
    }
];


const Vault = () => (
            <Box sx={{
                backgroundColor: 'background.default',
                p: 3
            }}>
                <Card>
                    <CardHeader title="Vault"/>
                    <Table>
                        <TableBody>
                            {elems.map((campaign) => (
                                <TableRow
                                    key={campaign.id}
                                    sx={{
                                        '&:last-child td': {
                                            border: 0
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            sx={{cursor: 'pointer'}}
                                            variant="subtitle2"
                                        >
                                            {campaign.name}
                                        </Typography>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                                mt: 1
                                            }}
                                        >
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                {campaign.filetype}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            variant="subtitle2"
                                        >
                                            Author
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{mt: 1}}
                                            variant="body2"
                                        >
                                            {campaign.author}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            variant="subtitle2"
                                        >
                                            Agenda Item
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{mt: 1}}
                                            variant="body2"
                                        >
                                            {campaign.agendaItem}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            variant="subtitle2"
                                        >

                                            Viewed?
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{mt: 1}}
                                            variant="body2"
                                        >
                                            {campaign.viewed}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            color="primary"
                                            size="small"
                                            variant="outlined"
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </Box>

    )
;

export default Vault;