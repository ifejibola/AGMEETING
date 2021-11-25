import React, { useState } from "react";
import {
    Box,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    Divider, FormControl, Grid, InputLabel, MenuItem, Select, Item,
    TextField
} from "@material-ui/core";
import {UploadFile} from "@mui/icons-material";


const Message = () => {

    const [destination, setDestination] = React.useState('');

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>
            <Card>
                <CardHeader title="Content Message" />
                <Divider />
                <form onSubmit={(event) => event.preventDefault()}>
                    <CardContent>
                        <Grid
                            container spacing={4}
                            sx={{ flexGrow: 1 }}
                        >
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Content Message"
                                    name="name"
                                    variant="outlined"
                                    multiline
                                    rows={13}
                                />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={4}
                            >
                                <FormControl fullWidth>
                                    <InputLabel >Destination</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Destination"
                                        onChange={handleDestinationChange}
                                    >
                                        <MenuItem value={1}>Option1</MenuItem>
                                        <MenuItem value={2}>Option2</MenuItem>
                                        <MenuItem value={3}>Option3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={4}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span">
                                       
                                    <UploadFile/> Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={4}
                            >
                                <CardActions
                                    sx={{
                                        justifyContent: 'flex-end',
                                        p: 2
                                    }}
                                >
                                    <Button
                                        color="primary"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Post Message
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </CardContent>

                </form>
            </Card>
        </Box>
    );
};

export default Message;