import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { subDays, subHours } from "date-fns";
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    Modal,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import Scrollbar from "../../Scrollbar";
import ArrowRightIcon from "../../icons/ArrowRight";
import PencilAltIcon from "../../icons/PencilAlt";
import SearchIcon from "../../icons/Search";
import { meetingService } from "../../../server/services/meeting.service";
import {authenticationService} from "../../../server/services/authentication.service";
import axios from "axios";


// From Material UI
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const sortOptions = [
    {
        label: "Last update (newest)",
        value: "updatedAt|desc",
    },
    {
        label: "Last update (oldest)",
        value: "updatedAt|asc",
    },
    {
        label: "Total orders (highest)",
        value: "orders|desc",
    },
    {
        label: "Total orders (lowest)",
        value: "orders|asc",
    },
];

const RegisteredMeeting = () => {
    const [meetings, setMeetings] = useState([]);
    const currentUser = authenticationService.currentUserValue;
    useEffect(async () => {
        await meetingService
            .getByUserId(currentUser.id)
            .then((filesList) => {
                //console.log(filesList)
                setMeetings(filesList);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                p: 3,
            }}
        >
            <Card>
                <Divider />
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        m: -1,
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            m: 1,
                            maxWidth: "100%",
                            width: 350,
                        }}
                    >
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Search File Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box
                        sx={{
                            m: 1,
                            width: 240,
                        }}
                    >
                        <TextField
                            label="Sort By"
                            name="sort"
                            select
                            SelectProps={{ native: true }}
                            variant="outlined"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Box>
                    <Box
                        sx={{
                            m: 1,
                            width: 240,
                        }}
                    >
                        {/*/<FileModal />*/}
                    </Box>
                </Box>
                <Scrollbar>
                    <Box sx={{ minWidth: 700 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary" />
                                    </TableCell>
                                    <TableCell>Meeting ID</TableCell>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>Time Join</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {meetings.map((meeting) => (
                                    <TableRow hover key={meeting.meeting_id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox color="primary" />
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                <Box sx={{ ml: 1 }}>
                                                    <Link color="inherit" variant="subtitle2">
                                                        {meeting.meeting_id}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.user_id}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.createdAt}
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
                    count={meetings.length}
                    onPageChange={() => {}}
                    onRowsPerPageChange={() => {}}
                    page={0}
                    rowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </Box>
    );
};

export default RegisteredMeeting;
