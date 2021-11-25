import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Container} from "@material-ui/core";
import useSettings from "../../../hooks/useSettings";

function createData(name, age, type, viewed) {
    return {name, age, type, viewed};
}

const rows = [
    createData('Giacomo Guilizzoni', 40, 'Peldi', ''),
    createData('Marco Botton', 38, '', 37, 4.3),
    createData('Marco Botton', 41, 16.0, 24, 6.0),
    createData('Valerie Liberty', 1, 3.7, 67, 4.3),
];


export default function Table1() {
    const { settings } = useSettings();

    return (
        <Box
            sx={{
                height: 600, width: '100%'
            }}
        >
            <Container maxWidth={settings.compact ? 'xl' : false}>

                <TableContainer style={{height: '100%', width: '100%'}} component={Paper}>
                    <Table sx={{height: '100%', width: '100%'}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Item Name</TableCell>
                                <TableCell align="left">Age</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Viewed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.age}</TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="left">{row.viewed}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>

    );
}

