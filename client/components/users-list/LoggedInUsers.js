import {Box, Card, CardHeader, Divider} from "@material-ui/core";
import UserList from "./UserList";
import React from "react";

const users = [
    {
        displayName: 'Giacomo Guillizzoni',
        jobTitle: 'Founder & CEO',
        example: 40,
        status: 'Administrator',
        registeredDate: '07/09/2018',
        placeholder: 'N/A',
        email: 'mock_email@gmail.com'
    },
    {
        displayName: 'Marco Botton',
        jobTitle: 'Tuttofare',
        example: 38,
        status: 'Moderator',
        registeredDate: '07/09/2018',
        placeholder: 'N/A',
        email: 'mock_email1@gmail.com'
    },
];

const LoggedInUsers = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>
            <Card>
                <CardHeader title="Logged In Users"/>
                <Divider/>
                <UserList users={users}/>
            </Card>
        </Box>
    );
};

export default LoggedInUsers;
