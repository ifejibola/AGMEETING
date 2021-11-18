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
    Divider,
    Checkbox
} from '@material-ui/core';

const items = [
    {
        itemName: "Welcome",
        description: "40",
        status: "Closed",
        start: "410420:36",
        end: "410420:36",
        votedYes: "0",
        votedNo: "0"
    },
    {
        itemName: "Approval of Agenda",
        description: "38",
        status: "Standing by for Second",
        start: "410420:36",
        end: "",
        votedYes: "0",
        votedNo: "0"
    },
    {
        itemName: "Approval of Past Minutes",
        description: "41",
        status: "Pending",
        start: "",
        end: "",
        votedYes: "0",
        votedNo: "0"
    }
];

const statusOptions = ['Closed', 'Standing by for Second', 'Pending'];

const content = (

    <Table>
        <TableBody>
            {items.map((campaign) => (
                <TableRow
                    key={campaign.itemName}
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
                        <Typography
                            color="textPrimary"
                            sx={{cursor: 'pointer'}}
                            variant="subtitle2"
                        >
                            Item Name
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
                                {campaign.itemName}
                            </Typography>
                        </Box>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            sx={{cursor: 'pointer'}}
                            variant="subtitle2"
                        >
                            Description
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
                                {campaign.description}
                            </Typography>
                        </Box>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                        >
                            Status
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{mt: 1}}
                            variant="body2"
                        >
                            {campaign.status}
                        </Typography>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                        >
                            Start
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{mt: 1}}
                            variant="body2"
                        >
                            {campaign.start}
                        </Typography>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                        >
                            End
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{mt: 1}}
                            variant="body2"
                        >
                            {campaign.end}
                        </Typography>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                        >
                            Voted Yes
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{mt: 1}}
                            variant="body2"
                        >
                            {campaign.votedYes}
                        </Typography>
                    </TableCell>

                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle2"
                        >
                            Voted No
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{mt: 1}}
                            variant="body2"
                        >
                            {campaign.votedNo}
                        </Typography>
                    </TableCell>

                </TableRow>
            ))}

        </TableBody>
    </Table>
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
                <CardHeader title="Agenda" />
                <Divider />
                {content}
            </Card>
        </Box>
    );
};

export default Agenda;
