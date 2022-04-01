import React, { useState } from 'react';
import axios from "axios";
import { toast } from "material-react-toastify";
import { useNavigate } from "react-router-dom";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AGMEETING
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModerator, setIsModerator] = useState(false);

  const handleAdminChanged = (event) => {
    setIsAdmin(event.target.checked);
  }

  const handleModeratorChanged = (event) => {
    setIsModerator(event.target.checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
    const password2 = data.get('password2');
    const meetingId = data.get('meetingId');

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
    axios.post('http://localhost:35/api/users/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      meetingId: meetingId,
      isAdmin: isAdmin,
      isModerator: isModerator
    }, { withCredentials: true }).then((response) => {
      navigate('/signin');
      console.log(response.data);
      toast.success('You have registered successfully.');
    }).catch((err) => {
      console.log(err.response.data);
      toast.error(err.response.data.message || 'There was an issue with registration.');
    });
    // if (password === password2) {
    //   console.log("password match")
    //   axios.post('http://localhost:35/api/users/register', {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //     meetingId: meetingId,
    //     isAdmin: isAdmin,
    //     isModerator: isModerator
    //   }, { withCredentials: true }).then((response) => {
    //     navigate('/login');
    //     console.log(response.data);
    //     toast.success('You have registered successfully.');
    //   }).catch((err) => {
    //     console.log(err.response.data);
    //     toast.error(err.response.data.message || 'There was an issue with registration.');
    //   });
    // } else {
    //   toast.error('The passwords must match.');
    // }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
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
                name="password"
                label="Enter Password again"
                type="password"
                id="passwordAgain"
                autoComplete="current-password"
              />

              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox checked={isAdmin} color="primary" onChange={handleAdminChanged} />}
                  label="Admin"
                />
                <FormControlLabel
                  control={<Checkbox checked={isModerator} color="primary"
                    onChange={handleModeratorChanged} />}
                  label="Moderator"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="meetingId"
                  label="Meeting Id"
                  type="text"
                  id="meetindId"
                  autoComplete="meetingId"
                />
              </Grid>

              <Button
                type="submit"
                // href="/"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>


    </>
  );
}