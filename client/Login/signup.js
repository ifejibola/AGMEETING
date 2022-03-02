import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {toast} from "material-react-toastify";
import {useNavigate} from "react-router-dom";


export default function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const password2 = data.get('password2');
        const meetingId = data.get('meetingId');

        if (password == password2) {
            axios.post('http://localhost:3000/api/participants/register', {
                email: email,
                password: password,
                meetingId: meetingId
            }, {withCredentials: true}).then((response) => {
                navigate('/login');
                console.log(response.data);
                toast.success('You have registered successfully.');
            }).catch((err) => {
                console.log(err.response.data);
                toast.error('There was an issue with registration.');
            });
        } else {
            toast.error('The passwords must match.');
        }
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password2"
                    label="Enter Password Again"
                    type="password"
                    id="password2"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="meetingId"
                    label="Meeting Id"
                    type="text"
                    id="meetindId"
                    autoComplete="meetingId"
                />
                <Button
                    type="submit"
                    href=""
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    );
}
