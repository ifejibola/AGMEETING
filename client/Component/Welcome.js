import React from 'react';
import { Typography, Grid,  experimentalStyled} from '@mui/material';


const StyledTypography =  experimentalStyled(Typography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.primary.dark
}),
...(theme.palette.mode === 'dark' && {
   color: theme.palette.primary.light
})
}))



const Welcome = ()=>{
    return(
      <Grid item container direction="column" justifyContent='center' alignItems='center'>
        < StyledTypography  variant="h2">Welcome To AGMEETING</ StyledTypography >
        < StyledTypography variant="h3">Click one of the links to be taken to it's page.</ StyledTypography >
      </Grid>
    )
  } 

export default Welcome