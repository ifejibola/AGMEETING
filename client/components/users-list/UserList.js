import {Box, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import React from "react";

const UserList = (props) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Checkbox
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Display Name (Job Title)
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Example
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Status
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Placeholder
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            color="textPrimary"
                            variant="subtitle1"
                        >Email
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.users.map((user) => (
                    <TableRow>
                        <TableCell>
                            <Checkbox/>
                        </TableCell>
                        <TableCell>
                            <Typography
                                color="textPrimary"
                                variant="subtitle2"
                            >
                                {user.displayName}
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
                                    {user.jobTitle}
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Typography
                                color="textPrimary"
                                sx={{mt: 1}}
                                variant="subtitle2"
                            >
                                {user.example}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                color="textPrimary"
                                sx={{mt: 1}}
                                variant="subtitle2"
                            >
                                {user.status}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography
                                color="textPrimary"
                                sx={{mt: 1}}
                                variant="subtitle2"
                            >
                                {user.placeholder}
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography
                                color="textPrimary"
                                sx={{mt: 1}}
                                variant="subtitle2"
                            >
                                {user.email}
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserList
