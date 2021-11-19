import React, {useState} from "react";
import {
    Autocomplete,
    Box,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    Divider, FormControl, Grid, InputLabel, MenuItem, Select, Switch,
    Table,
    TableCell,
    TableRow, TextField,
    Typography
} from "@material-ui/core";


const countries = [
    { text: 'Jersey', value: 'JE' },
    { text: 'Jordan', value: 'JO' },
    { text: 'Kazakhstan', value: 'KZ' },
    { text: 'Kenya', value: 'KE' },
    { text: 'Kiribati', value: 'KI' },
    { text: 'Korea, Democratic People\'S Republic of', value: 'KP' },
    { text: 'Korea, Republic of', value: 'KR' },
    { text: 'Kuwait', value: 'KW' },
    { text: 'Kyrgyzstan', value: 'KG' },
    { text: 'Lao People\'S Democratic Republic', value: 'LA' }
];


const MainSettingsPage = () => {

    const [chair, setChair] = React.useState('');
    const [location, setLocation] = React.useState('');

    const handleChairChange = (event) => {
        setChair(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };


    return (
        <Box sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}>
            <Card>
                <CardHeader title="Settings"/>
                <Divider/>
                <form onSubmit={(event) => event.preventDefault()}>
                    <CardContent>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid
                                item
                                md={12}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Event Name"
                                    name="name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel >Age</InputLabel>
                                    <Select
                                        value={chair}
                                        label="Meeting Chair"
                                        onChange={handleChairChange}
                                    >
                                        <MenuItem value={1}>Option1</MenuItem>
                                        <MenuItem value={2}>Option2</MenuItem>
                                        <MenuItem value={3}>Option3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Place</InputLabel>
                                    <Select
                                        value={location}
                                        label="Place"
                                        onChange={handleLocationChange}
                                    >
                                        <MenuItem value={1}>Kelowna</MenuItem>
                                        <MenuItem value={2}>Vancouver</MenuItem>
                                        <MenuItem value={3}>Victoria</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <Autocomplete
                                    getOptionLabel={(option) => option.text}
                                    options={countries}
                                    renderInput={(params) => (
                                        <TextField
                                            fullWidth
                                            label="Country"
                                            name="country"
                                            variant="outlined"
                                            {...params}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="State/Region"
                                    name="state"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="City"
                                    name="city"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="subtitle2"
                                >
                                    Public Profile
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body2"
                                >
                                    Means that anyone viewing your profile will
                                    be able to see your contacts details
                                </Typography>
                                <Switch
                                    color="primary"
                                    edge="start"
                                    name="isPublic"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <Typography
                                    color="textPrimary"
                                    gutterBottom
                                    variant="subtitle2"
                                >
                                    Available to hire
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="body2"
                                >
                                    Toggling this will let your teammates know
                                    that you are available for acquiring new projects
                                </Typography>
                                <Switch
                                    color="primary"
                                    edge="start"
                                    name="canHire"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
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
                            Save Settings
                        </Button>
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                        >
                            Cancel
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </Box>
    );
};

export default MainSettingsPage;