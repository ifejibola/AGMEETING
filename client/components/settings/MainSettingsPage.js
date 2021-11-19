import React, {useState} from "react";
import {Box, Button, Card, CardHeader, Divider, Table, TableCell, TableRow} from "@material-ui/core";

const content = (
    <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}
    >
        <Card>
            <CardHeader title="WORK IN PROGRESS"/>
        </Card>
    </Box>

);


const MainSettingsPage = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>
            <Card>
                <CardHeader title="Settings"/>
                <Divider/>
                {content}
            </Card>
        </Box>
    );
};

export default MainSettingsPage;