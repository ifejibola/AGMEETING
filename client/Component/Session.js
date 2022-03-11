import React from "react";
import { Box, styled } from "@mui/system";
import useSettings from "../hooks/useSettings";
import { CardContent, Grid, Typography, Card, CardHeader, experimentalStyled } from "@mui/material";

const sessionItems = [
  {
    header: "Discussion point 1",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 2",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 3",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 4",
    text: "discussion stuff",
  },
  {
    header: "Discussion point 5",
    text: "discussion stuff",
  },
];

const StyledTypography =  experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.primary.dark
}),
...(theme.palette.mode === 'dark' && {
   color: theme.palette.primary.light
})
}))

const Session = (theme) => {
  const { settings } = useSettings();
  return (
    <Grid container item direction="row" justifyContent="center">
      <Grid
        container
        item
        justifyContent="center"
        sx={{ marginBottom: "20px" }}
      >
        <StyledTypography variant="h2">
          Session
        </StyledTypography>
      </Grid>
      <Grid item container direction="column" xs={5}>
        {sessionItems.map((item, key) => (
          <Card sx={{ marginBottom: "20px" }}>
            <CardHeader component="h1" title={item.header}></CardHeader>
            <CardContent>
              <Typography>{item.text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
export default Session;
