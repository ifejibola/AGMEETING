import { Box, Button } from '@material-ui/core';
import React from "react";
import {Grid} from '@material-ui/core';

const Interactions = () => (
  <div>
    <a href="" > Interactions</a>
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 3,
        width: '50%',
        margin: 'auto'
      }}
    >       
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            fullWidth
            > Button 
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            fullWidth
          >SecondItem
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            fullWidth
          >
            Comment For
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item xs={12}>     
          <Button
              color="primary"
              size="large"
              variant="outlined"
              fullWidth
              >
              Withdraw Comment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
          >
            Button
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
          >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
        <Grid item  xs={4}>
          <Button
            color="primary"
            size="medium"
            variant="outlined"
            fullWidth
            >
            Comment Against
          </Button>
        </Grid>
      </Grid>
    </Box>
  </div>
);

export default Interactions;
