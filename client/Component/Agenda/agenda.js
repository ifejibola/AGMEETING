import React, { useCallback, useState, useEffect } from 'react'
import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
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
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../icons/ArrowRight';
import DotsHorizontalIcon from '../../icons/DotsHorizontal';
import PencilAltIcon from '../../icons/PencilAlt';
import Plus from '../../icons/Plus';

import useSettings from '../../hooks/useSettings';
import Votes from '../Votes/votes';
import Modal from './Modal'

const now = new Date();

const orders = [
    {
        id: '5ecb8a6d9f53bfae09e16115',
        createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
        currency: '$',
        customer: {
            email: 'carson.darrin@devias.io',
            name: 'Carson Darrin'
        },
        number: 'DEV-102',
        paymentMethod: 'CreditCard',
        status: 'pending',
        totalAmount: 500.00
    },
    {
        id: '5ecb8a738aa6f3e577c2b3ec',
        createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
        currency: '$',
        customer: {
            email: 'fran.perez@devias.io',
            name: 'Fran Perez'
        },
        number: 'DEV-101',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
    },
    {
        id: '5ecb8a795e53f134013eba3b',
        createdAt: subMinutes(subSeconds(now, 55), 38).getTime(),
        currency: '$',
        customer: {
            email: 'jie.yan.song@devias.io',
            name: 'Jie Yan Song'
        },
        number: 'DEV-100',
        paymentMethod: 'CreditCard',
        status: 'pending',
        totalAmount: 500.00
    },
    {
        id: '5ecb8a7f738cc572a9ce0277',
        createdAt: subMinutes(subSeconds(now, 3), 40).getTime(),
        currency: '$',
        customer: {
            email: 'clarke.gillebert@devias.io',
            name: 'Clarke Gillebert'
        },
        number: 'DEV-99',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        createdAt: subMinutes(subSeconds(now, 32), 45).getTime(),
        currency: '$',
        customer: {
            email: 'miron.vitold@devias.io',
            name: 'Miron Vitold'
        },
        number: 'DEV-98',
        paymentMethod: 'PayPal',
        status: 'completed',
        totalAmount: 500.00
    }
];

const getStatusLabel = (paymentStatus) => {
    const map = {
        canceled: {
            color: 'error',
            text: 'Canceled'
        },
        completed: {
            color: 'success',
            text: 'Completed'
        },
        pending: {
            color: 'warning',
            text: 'Pending'
        },
        rejected: {
            color: 'error',
            text: 'Rejected'
        }
    };

    const { text, color } = map[paymentStatus];

    return (
        <Label color={color}>
            {text}
        </Label>
    );
};

const Agenda = () => {

    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const { settings } = useSettings();


    const handleApplyModalOpen = () => {
        setIsApplicationOpen(true);
    };

    const handleApplyModalClose = () => {
        setIsApplicationOpen(false);
    };
    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                p: 3
            }}
        >
            {/* AGENDA MODAL */}
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 8
                }}
            >
                <Container maxWidth={settings.compact ? 'xl' : false}>
                    <Grid
                        container
                        justifyContent="space-between"
                        spacing={3}
                    >

                        <Grid item>
                            <Box sx={{ m: -1 }}>

                                <Button
                                    color="primary"
                                    onClick={handleApplyModalOpen}
                                    startIcon={<Plus fontSize="small" />}
                                    sx={{ m: 1 }}
                                    variant="contained"
                                >
                                    Add Item
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            {/* AGENDA */}
            <Card>
                <CardHeader
                    action={(
                        <IconButton>
                            <DotsHorizontalIcon fontSize="small" />
                        </IconButton>
                    )}
                    title="Agenda"
                />
                <Divider />
                <Scrollbar>
                    <Box sx={{ minWidth: 1150 }}>
                        <Table>
                            <TableHead>
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
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        hover
                                        key={order.id}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox color="primary" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.number}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                {format(order.createdAt, 'dd MMM yyyy | HH:mm')}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.customer.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                {order.customer.email}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {order.paymentMethod}
                                        </TableCell>
                                        <TableCell>
                                            {numeral(order.totalAmount)
                                                .format(`${order.currency}0,0.00`)}
                                        </TableCell>
                                        <TableCell>
                                            {getStatusLabel(order.status)}
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

                    </Box>
                </Scrollbar>
                <TablePagination
                    component="div"
                    count={orders.length}
                    onPageChange={() => {
                    }}
                    onRowsPerPageChange={() => {
                    }}
                    page={0}
                    rowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />


                {/* VOTES */}
                <Votes />

                {/* Modal */}

                <Modal
                    // authorAvatar={project.author.avatar}
                    // authorName={project.author.name}
                    onApply={handleApplyModalClose}
                    onClose={handleApplyModalClose}
                    open={isApplicationOpen}
                />
            </Card>
        </Box>
    )
};

export default Agenda;
