import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ContentMessage() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  const [destination, setDestination] = React.useState('');
  

  return (
    <Box
      component="form"
      sx={{
        marginLeft: '20%', 
        marginTop: '5%',
        width: '100%',
        height: 900
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Multiline"
          style = {{width: '45%'}}
          multiline
          rows={15}
          defaultValue="Message1"
        />
        </div>
        <div>
         <TextField
          label="single line"
          style = {{width: "40%", marginTop:'2%'}}
          defaultValue="Message2"
          />
        </div>
        <div>
            <Stack spacing={5} direction="row" style = {{marginTop:'2%'}}>
                
            <FormControl>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={destination}
            style = {{width: 120}}
            onChange={handleChange}
            >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            </Select>
            </FormControl>
            <Button variant="contained">Attachment</Button>
            <Button variant="contained">Post Message</Button>
            </Stack>
        </div>
    </Box>
  );
}