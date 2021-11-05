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


const content = (
    <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}
    >
    <Card>
     <Button><CardHeader title="Interactions"/></Button>
     <Divider />
        <Table size="medium">
            <tbody>
                <TableRow>
                    <TableCell align="center">
                    <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                        >
                            Button
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                        >
                            Second Item
                       </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center">
                    <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                        >
                            Comment FOR
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center" colSpan="3">
                    <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                            size ="lg"
                        >
                            Withdraw Comment
                       </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center">
                    <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                        >
                            Button
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Button
                            color="secondary"
                            size="small"
                            variant="outlined"
                        >
                            Comment AGAINST
                       </Button>
                    </TableCell>
                </TableRow>
            </tbody>
        </Table>

    </Card>
    </Box>
    
);

const Interactions = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 20
        }}>
            <Card>
                {content}
            </Card>
        </Box>
    );
}
;

export default Interactions;