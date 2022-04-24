import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { login } from "../actions";
import store from "../redux/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        AGMeeting
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

//Sign in component, where the user logs in
const SignIn = (props) => {
  const [emailError, setEmailError] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [loginError, setLoginError] = useState(null);
  let navigate = useNavigate();
  //access and unused refresh tokens are stored in local storage at the moment, will probably want to change this implementation of JWT tokens at some point in the future
  useEffect(() => {
    if (localStorage.getItem("is_authenticated")) {
      localStorage.removeItem("is_authenticated");
    }
  }, []);

  useEffect(() => {
    if (props.userReducer.failedLogin === true) {
      setFailedLogin(true);
      setLoginError("Incorrect username or password");
    }
  }, [props.userReducer.failedLogin]);

  //called when the user clicks the button to log in

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!isEmail(data.get("email"))) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    props.onLogin(data.get("email"), data.get("password"), navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              error={emailError || failedLogin}
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
              error={failedLogin}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {props.userReducer.failedLogin && (
              <span
                id="error"
                margin="normal"
                style={{
                  fontWeight: "bold",
                  color: "red",
                  display: "block",
                }}
              >
                {loginError}
              </span>
            )}
            <Button
              id="submit"
              type="submit"
              // href="/"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password, callback1, callback2) => {
      dispatch(login(email, password, callback1, callback2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
