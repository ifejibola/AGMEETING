import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import React from "react";
import { useState } from "react";
//import {Grid} from '@material-ui/core';
import { Link as RouterLink, useLocation } from "react-router-dom";

const defaultValues = {
  outText: "",
  inText: "",
};

const ContentMessage = () => {
  const [text, setText] = useState(defaultValues);

  const setInText = (event) => {
    setText({
      inText: event.target.value,
    });
  };

  const handleClick = (event) => {
    setText({
      outText: "Username: " + text.inText,
      inText: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: 3,
          borderRadius: 2,
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
              value={text.outText}
              sx={{
                Height: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label=""
              placeholder="Message"
              fullWidth
              variant="outlined"
              onChange={setInText}
              value={text.inText}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{}} fullWidth>
              <InputLabel id="input">Destination</InputLabel>
              <Select
                labelId="inputlab"
                id="sel"
                //value={destination}
                label="Destination"
                //onChange={handleChange}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
            >
              Attachment
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={handleClick}
            >
              Post Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContentMessage;
