import React, {useState} from "react";
import numeral from 'numeral';
import {format, subMinutes, subSeconds} from 'date-fns';
import {
    Box,
    Button,
    Card,
    Container,
    CardHeader,
    Checkbox,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@material-ui/core';
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../icons/ArrowRight';
import DotsHorizontalIcon from '../../icons/DotsHorizontal';
import PencilAltIcon from '../../icons/PencilAlt';

const now = new Date();

const items = [
    {
        number: "Dev-102",
        time: "20 Jan 2022 | 15:57",
        customer: {
            email: 'carson.darrin@devias.io',
            name: 'Carson Darrin'
        },
        paymentMethod: "CreditCard",
        total: "$500.00",
        status: "Pending"
    },
    {
        number: "Dev-101",
        time: "20 Jan 2022 | 15:53",
        customer: {
            email: 'fran.perez@devias.io',
            name: 'Fran Perez'
        },
        paymentMethod: "PayPal",
        total: "$500.00",
        status: "Completed"
    },
    {
        number: "Dev-100",
        time: "20 Jan 2022 | 15:51",
        customer: {
            email: 'jie.yan.song@devias.io',
            name: 'Jie Yan Song'
        },
        paymentMethod: "CreditCard",
        total: "$500.00",
        status: "Pending"
    },
    {
        number: "Dev-99",
        time: "20 Jan 2022 | 15:50",
        customer: {
            email: 'clarke.gillebert@devias.io',
            name: 'Clarke Gillebert'
        },
        paymentMethod: "PayPal",
        total: "$500.00",
        status: "Completed"
    },
    {
        number: "Dev-98",
        time: "20 Jan 2022 | 15:44",
        customer: {
            email: 'miron.vitold@devias.io',
            name: 'Miron Vitold'
        },
        paymentMethod: "PayPal",
        total: "$500.00",
        status: "Completed"
    }
];

const statusOptions = ['Closed', 'Standing by for Second', 'Pending'];

const content = (

    <Box>
    <Table>
    <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary" />
                                    </TableCell>
                                    <TableCell>
                                        Number
                                    </TableCell>
                                    <TableCell>
                                        Customer
                                    </TableCell>
                                    <TableCell>
                                        Method
                                    </TableCell>
                                    <TableCell>
                                        Total
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                    <TableCell align="right">
                                        Actions
                                    </TableCell>
                                </TableRow>
        <TableBody>
            {items.map((campaign) => (
                <TableRow
                    key={campaign.number}
                    sx={{
                        '&:last-child td': {
                            border: 0
                        }
                    }}
                >
                    <TableCell>
                        <Checkbox/>
                    </TableCell>

                    <TableCell>
                            {campaign.number}
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
                                {campaign.time}
                                </Typography>
                        </Box>
                    </TableCell>

                    <TableCell>
                            {campaign.customer.name}
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
                                {campaign.customer.email}
                                </Typography>
                        </Box>
                    </TableCell>

                    <TableCell>
                            {campaign.paymentMethod}
                    </TableCell>

                    <TableCell>
                            {campaign.total}
                    </TableCell>

                    <TableCell>
                            {campaign.status}
                    </TableCell>

                    <TableCell align="right">
                                            <IconButton>
                                                <PencilAltIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton>
                                                <ArrowRightIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                </TableRow>
            ))}

        </TableBody>
    </Table>
    <Divider />
    <TablePagination
                    component="div"
                    count={items.length}
                    onPageChange={() => {
                    }}
                    onRowsPerPageChange={() => {
                    }}
                    page={0}
                    rowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
    </Box>
    
);

const Agenda = () => {
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
                <CardHeader action={(
                        <IconButton>
                            <DotsHorizontalIcon fontSize="small" />
                        </IconButton>
                    )} title="Agenda" />
                <Divider />
                {content}
            </Card>
        </Box>
    );
};

export default Agenda;
