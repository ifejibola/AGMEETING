import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from "@material-ui/core";

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
    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 8
            }}
        >
            <TableContainer style={{height: '100%', width: '100%'}} component={Paper}>
                <Table sx={{height: '100%', width: '100%'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Item Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Viewed</TableCell>
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
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.viewed}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
}

