import {Button, Box, TextField, FormControl, InputLabel, Select, MenuItem, Grid} from '@material-ui/core';
import React from "react";
//import {Grid} from '@material-ui/core';


const ContentMessage = () => (
    <div>
        <Box
        sx={{
            backgroundColor: 'background.paper',
            p: 3,
            width: '50%',
            margin: 'auto'
        }}
        >   
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField 
                    disabled
                    multiline
                    rows={15}
                    size="large"
                    fullWidth
                    label=""
                    variant="outlined" 
                    sx={{
                        Height: '100%',
                       
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic"
                    label=""
                    fullWidth
                    fullHeight
                    variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <FormControl sx={{ m: 1}} fullWidth>
                        <InputLabel id="input">Destination</InputLabel>
                        <Select
                        labelId="inputlab"
                        id="sel"
                        //value={destination}
                        label="Destination"
                        //onChange={handleChange}
                        >
                            <MenuItem value={''}>Option 1</MenuItem>
                            <MenuItem value={''}>Option 2</MenuItem>
                            <MenuItem value={''}>Option 3</MenuItem>
                        </Select>
                    </FormControl>
                   
                </Grid>
                <Grid item xs={4}>
                    <Button
                    
                    color="primary"
                    size="large"
                    variant="outlined"
                    fullWidth
                    >Attachment
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                    color="primary"
                    size="large"
                    variant="outlined"
                    fullWidth
                    >Post Message
                    </Button>
                    
                </Grid>
            </Grid>
        </Box>
    </div>
);

export default ContentMessage;