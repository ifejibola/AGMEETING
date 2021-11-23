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


const MainSettingsPage = () => {

    const [chair, setChair] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [numComment, setNumComment] = React.useState('');
    const [forComment, setFor] = React.useState('');
    const [commentTime, setCommentTime] = React.useState('');
    const [againstComment, setAgainst] = React.useState('');
    const [commentsPerItem, setCommentsPerItem] = React.useState('');
    const [voteTime, setVoteTime] = React.useState('');
    const [commentSessionTime, setCommentSessionTime] = React.useState('');
    const [percent, setPercent] = React.useState('');





    const handleChairChange = (event) => {
        setChair(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handleNumCommentChange = (event) => {
        setNumComment(event.target.value);
    };
    const handleForChange = (event) => {
        setFor(event.target.value);
    };
    const handleCommentTimeChange = (event) => {
        setCommentTime(event.target.value);
    };
    const handleAgainstChange = (event) => {
        setAgainst(event.target.value);
    };
    const handleCommentPerItemChange = (event) => {
        setCommentsPerItem(event.target.value);
    };
    const handleVoteTimeChange = (event) => {
        setVoteTime(event.target.value);
    };
    const handleCommentSessionTimeChange = (event) => {
        setCommentSessionTime(event.target.value);
    };
    const handlePercentChange = (event) => {
        setPercent(event.target.value);
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
                                md={4}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel >Meeting Chair</InputLabel>
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
                                md={4}
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
                                md={4}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel># of Comments Per User</InputLabel>
                                    <Select
                                        value={numComment}
                                        label="# of Comments Per User"
                                        onChange={handleNumCommentChange}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Maximum Number of FOR</InputLabel>
                                    <Select
                                        value={forComment}
                                        label="Maximum Number of FOR"
                                        onChange={handleForChange}
                                    >
                                        <MenuItem value={1}>1 Comment</MenuItem>
                                        <MenuItem value={2}>2 Comments</MenuItem>
                                        <MenuItem value={3}>3 Comments</MenuItem>
                                        <MenuItem value={4}>4 Comments</MenuItem>
                                        <MenuItem value={5}>5 Comments</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Time for Each Comment</InputLabel>
                                    <Select
                                        value={commentTime}
                                        label="Time for Each Comment"
                                        onChange={handleCommentTimeChange}
                                    >
                                        <MenuItem value={1}>1 Minute </MenuItem>
                                        <MenuItem value={2}>2 Minutes</MenuItem>
                                        <MenuItem value={3}>3 Minutes </MenuItem>
                                        <MenuItem value={4}>4 Minutes</MenuItem>
                                        <MenuItem value={5}>5 Minutes</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Maximum Number of AGAINST</InputLabel>
                                    <Select
                                        value={againstComment}
                                        label="Maximum Number of AGAINST"
                                        onChange={handleAgainstChange}
                                    >
                                        <MenuItem value={1}>1 Comment</MenuItem>
                                        <MenuItem value={2}>2 Comments</MenuItem>
                                        <MenuItem value={3}>3 Comments</MenuItem>
                                        <MenuItem value={4}>4 Comments</MenuItem>
                                        <MenuItem value={5}>5 Comments</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Number of Comments per User per Item</InputLabel>
                                    <Select
                                        value={commentsPerItem}
                                        label="Number of Comments per User per Item"
                                        onChange={handleCommentPerItemChange}
                                    >
                                        <MenuItem value={1}>1 Comment per Item </MenuItem>
                                        <MenuItem value={2}>2 Comments per Item</MenuItem>
                                        <MenuItem value={3}>3 Comments per Item </MenuItem>
                                        <MenuItem value={4}>4 Comments per Item</MenuItem>
                                        <MenuItem value={5}>5 Comments per Item</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Time for the Voting Session</InputLabel>
                                    <Select
                                        value={voteTime}
                                        label="Time for the Voting Session"
                                        onChange={handleVoteTimeChange}
                                    >
                                        <MenuItem value={1}>1 Minute</MenuItem>
                                        <MenuItem value={2}>2 Minutes</MenuItem>
                                        <MenuItem value={3}>3 Minutes</MenuItem>
                                        <MenuItem value={4}>4 Minutes</MenuItem>
                                        <MenuItem value={5}>5 Minutes</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>Maximum Time for Comment Session</InputLabel>
                                    <Select
                                        value={commentSessionTime}
                                        label="Maximum Time for Comment Session"
                                        onChange={handleCommentSessionTimeChange}
                                    >
                                        <MenuItem value={1}>1 Minute</MenuItem>
                                        <MenuItem value={2}>2 Minutes</MenuItem>
                                        <MenuItem value={3}>3 Minutes</MenuItem>
                                        <MenuItem value={4}>4 Minutes</MenuItem>
                                        <MenuItem value={5}>5 Minutes</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel>% of Participants to Call for a Vote</InputLabel>
                                    <Select
                                        value={percent}
                                        label="% of Participants to Call for a Vote"
                                        onChange={handlePercentChange}
                                    >
                                        <MenuItem value={1}>25% Participants</MenuItem>
                                        <MenuItem value={2}>50% Participants</MenuItem>
                                        <MenuItem value={3}>75% Participants</MenuItem>
                                        <MenuItem value={4}>100% Participants</MenuItem>
                                    </Select>
                                </FormControl>
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