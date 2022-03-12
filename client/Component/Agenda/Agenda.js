import React, {useState} from 'react'
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
        itemName: 'Welcome',
        description: '',
        status: 'closed',
        start: subMinutes(subSeconds(now, 23), 32).getTime(),
        end: subMinutes(subSeconds(now, 23), 32).getTime(),
        votedYes: 12,
        votedNo: 5
    },
    {
        id: '5ecb8a738aa6f3e577c2b3ec',
        itemName: 'Approval of Agenda',
        description: '',
        status: 'standingByForSecond',
        start: subMinutes(subSeconds(now, 23), 32).getTime(),
        end: subMinutes(subSeconds(now, 23), 32).getTime(),
        votedYes: 0,
        votedNo: 0
    },
    {
        id: '5ecb8a795e53f134013eba3b',
        itemName: 'Approval of Past Minutes',
        description: '',
        status: 'pending',
        start: subMinutes(subSeconds(now, 23), 32).getTime(),
        end: subMinutes(subSeconds(now, 23), 32).getTime(),
        votedYes: 0,
        votedNo: 0
    },
    {
        id: '5ecb8a7f738cc572a9ce0277',
        itemName: 'Nomination of Board of Directors',
        description: '',
        status: 'pending',
        start: subMinutes(subSeconds(now, 23), 32).getTime(),
        end: subMinutes(subSeconds(now, 23), 32).getTime(),
        votedYes: 0,
        votedNo: 0
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        itemName: 'Voting for Board of Directors',
        description: '',
        status: 'pending',
        start: subMinutes(subSeconds(now, 23), 32).getTime(),
        end: subMinutes(subSeconds(now, 23), 32).getTime(),
        votedYes: 0,
        votedNo: 0
    }
];

const getStatusLabel = (status) => {
    const map = {
        standingByForSecond: {
            color: 'error',
            text: 'Standing by for Second'
        },
        closed: {
            color: 'success',
            text: 'Closed'
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

    const {text, color} = map[status];

    return (
        <Label color={color}>
            {text}
        </Label>
    );
};

const Agenda = () => {

    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const {settings} = useSettings();

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
                    py: 1
                }}
            >
                <Container maxWidth={settings.compact ? 'xl' : false}>
                    <Grid
                        container
                        justifyContent="space-between"
                        spacing={3}
                    >
                        <Grid item>
                            <Box sx={{m: -1}}>
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
                            <DotsHorizontalIcon fontSize="small"/>
                        </IconButton>
                    )}
                    title="Agenda"
                />
                <Button
                color="primary"
                onClick={handleApplyModalOpen}
                startIcon={<Plus fontSize="small"/>}
                sx={{m: 1}}
                variant="contained"
                >
                Add Item
                </Button>
                <Divider/>
                <Scrollbar>
                    <Box sx={{minWidth: 1150}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary"/>
                                    </TableCell>
                                    <TableCell>
                                        Item Name
                                    </TableCell>
                                    <TableCell>
                                        Description
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                    <TableCell>
                                        Start
                                    </TableCell>
                                    <TableCell>
                                        End
                                    </TableCell>
                                    <TableCell>
                                        Voted Yes
                                    </TableCell>
                                    <TableCell>
                                        Voted No
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
                                            <Checkbox color="primary"/>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.itemName}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.description}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {getStatusLabel(order.status)}
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {format(order.start, 'dd MMM yyyy | HH:mm')}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {format(order.end, 'dd MMM yyyy | HH:mm')}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.votedYes}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.votedNo}
                                            </Typography>
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
                <Votes/>
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
