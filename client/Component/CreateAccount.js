import React from "react";
import { useState } from "react";
import {Grid, Typography, Card, CardContent, TextField, Button, experimentalStyled} from '@mui/material'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { display } from "@mui/system";



const mapStateToProps = (state)=>{
  return{
      userList: state.userList,
      currentUser: state.currentUser
  }
}

const StyledTypography =  experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.primary.dark
}),
...(theme.palette.mode === 'dark' && {
   color: theme.palette.primary.light
})
}))

 
const CreateAccount = ({dispatch, userList})=>{
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createNewAccount = ()=>{
      if(enteredPassword !== confirmPassword)
        return alert("Passwords are not the same!");
      dispatch({
        type: "CREATE_NEW_USER",
        payload: {username: enteredUsername, password: enteredPassword}
      })
    }
    return(
        <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#171C24" }}
    >
      <Grid container direction="column" alignContent="center">
        <StyledTypography variant="h1">AGMEETING</StyledTypography>
      </Grid>
      <Grid container item direction="column" alignContent="center">
        <Card style={{ display: "inline-block" }}>
          <CardContent>
            <TextField placeholder="Email" fullWidth onChange={(e)=>{setEnteredEmail(e.target.value)}} type="email"></TextField>
            <TextField placeholder="Username" fullWidth onChange={(e)=>{setEnteredUsername(e.target.value)}}></TextField>
            <TextField
              placeholder="Password"
              type="password"
              fullWidth
              onChange={(e)=>{setEnteredPassword(e.target.value)}}
            ></TextField>
            <TextField
              placeholder="Confirm Password"
              type="password"
              fullWidth
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
            ></TextField>
            {enteredPassword === confirmPassword ?(
              (enteredUsername && enteredEmail &&enteredPassword &&confirmPassword)?
                <Link to="/">
                  <Button onClick={(e)=>{createNewAccount(e); console.log('clicked')}}>
                    Create Account
                  </Button>
                </Link>:
                <Button disabled>
                  Create Account
                </Button>
            ):<Typography sx={{color:'red', display:'inline-block'}}>Passwords are not the same</Typography>}
            <Link to="/">
              <Button>
                Cancel
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    )
}

export default connect(mapStateToProps)(CreateAccount)