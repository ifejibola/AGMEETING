import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import validator from "validator";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

export default function AddUsers() {
    const [signupError, setSignupError] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        const role = data.get("role");
        const name = data.get("name");
        // make sure email is valid
        if (!validator.isEmail(data.get("email"))) {
            setSignupError("Enter valid Email!");
            return;
        }
        if (!password) {
            setSignupError("Passwords must not be empty");
        }
        else if (!role) {
            setSignupError("Role must not be empty");
        }
        else if (!name) {
            setSignupError("Full name must not be empty");
        }
        else {
            setSignupError("");
            await axios.post("http://localhost:3000/api/v1/register", {email, password, role, name})
                .then(response => {
                    console.log(response);
                    setSignupError(response.data.message);
                })
                .catch(error => {
                    setSignupError("Email has been used. Please try a different email or forget password.");
                    console.log(error);
                })
        }
    };

    return (
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
                <Typography component="h1" variant="h5">
                    Add New User
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
                        autoComplete="password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Full Name"
                        type="name"
                        id="name"
                        autoComplete="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        select
                        name="role"
                        label="Role"
                        type="role"
                        id="role"
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="moderator">Moderator</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </TextField>
                    <Typography component="h3" variant="h8" color={"#b30000"}>
                        {signupError}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create new user
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}