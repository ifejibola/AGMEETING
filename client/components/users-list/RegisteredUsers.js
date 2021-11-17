import {
    Box,
    Card,
    CardHeader,
    Divider,
} from "@material-ui/core";
import React from "react";
import UserList from "./UserList";

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
    {
        displayName: 'Valerie Liberty',
        jobTitle: 'Head Chef',
        example: 41,
        status: 'Participant',
        registeredDate: '07/09/2018',
        placeholder: 'N/A',
        email: 'mock_email2@gmail.com'
    }
];

const RegisteredUsers = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>
            <Card>
                <CardHeader title="Registered Users"/>
                <Divider/>
                <UserList users={users}/>
            </Card>
        </Box>
    );
};

export default RegisteredUsers;
