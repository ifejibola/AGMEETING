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
import validator from "validator";
import { createAccount } from "../actions";
import { connect, ReactReduxContext } from "react-redux";
import { useNavigate } from "react-router";
import store from "../redux/store";

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
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignUp(props) {
  const [signupError, setSignupError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // make sure email is valid
    if (!validator.isEmail(data.get("email"))) {
      setSignupError("Enter valid Email!");
      console.log("here");
      return;
    }
    // check passwords are matching
    if (data.get("password") !== data.get("passwordAgain")) {
      setSignupError("Passwords must match");
      console.log("here");
      return;
    }
    //check both passwords have been entered
    else if (!data.get("password") || !data.get("passwordAgain")) {
      setSignupError("Please enter a password twice");
      console.log("here");
      return;
    } else {
      setSignupError("");
      //pass in the navigate function from the useNavigate hook with the route you want to navigate to to the action creator so that the callback can be called from the redux action creator
      props.onCreateAccount(data.get("email"), data.get("password"), () => {
        navigate("/login");
      });
    }
    //
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              name="passwordAgain"
              label="Enter Password again"
              type="password"
              id="passwordAgain"
              autoComplete="current-password"
            />
            <span
              margin="normal"
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {signupError}
            </span>
            <Button
              type="submit"
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
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Make sure you have the callback function in here so that you can pass the navigate funtion through to the action creator
    onCreateAccount: (email, password, callback) => {
      dispatch(createAccount(email, password, callback));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
