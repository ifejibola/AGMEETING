import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const defaultValues = {
    eventName: "",
    meetingChair: "Jim John",
    year: 2021,
    place: "COM 201",
    threeComments: true,
    comments: 5,
    contentTime: 10,
    commentsAgainst: false,
    perUser: 10,
    votingSessionTime: 1,
    commentSession: 1,
    voteCall: 50
};

const Settings = () => {
    const [formValues, setFormValues] = useState(defaultValues);
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("eventName: " + formValues.eventName + "\nmeetingChair: " + formValues.meetingChair + "\nyear: " 
        + formValues.year + "\nplace: " + formValues.place + "\nthreeComments: " + formValues.threeComments 
        + "\ncomments: " + formValues.comments + "\ncontentTime: " + formValues.contentTime + "\ncommentsAgainst: " 
        + formValues.commentsAgainst + "\nperUser: " + formValues.perUser + "\nvotingSessionTime: " + formValues.votingSessionTime
        + "\ncommentSession: " + formValues.commentSession + "\nvoteCall: " + formValues.voteCall);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <form onSubmit={handleSubmit}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
                    <Input id="eventName" name='eventName' placeholder="Event Name" value={formValues.eventName} onChange={handleInputChange} />
                </FormControl>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Meeting Chair
                        </InputLabel>
                        <Select
                            value={formValues.meetingChair}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'meetingChair',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={"Jim John"} >Jim John</MenuItem> 
                            <MenuItem value={"Martha Smith"}>Martha Smith</MenuItem>
                            <MenuItem value={"Garfield the Cat"}>Garfield the Cat</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Year
                        </InputLabel>
                        <Select
                            value={formValues.year}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'year',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2019}>2019</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Place
                        </InputLabel>
                        <Select
                            value={formValues.place}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'place',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={"COM 201"}>COM 201</MenuItem>
                            <MenuItem value={"UNC 128"}>UNC 128</MenuItem>
                            <MenuItem value={"ADM 028"}>ADM 028</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            3 Comments
                        </InputLabel>
                        <Select
                            value={formValues.threeComments}
                            onChange={handleInputChange}
                            inputProps={{
                                name: '3comments',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={true}>Allowed</MenuItem>
                            <MenuItem value={false}>Disallowed</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ ml: 9, mr: 10, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comments
                        </InputLabel>
                        <Select
                            value={formValues.comments}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'comments',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={15}>Fifteen</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Content Time
                        </InputLabel>
                        <Select
                            value={formValues.contentTime}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'contentTime',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={5}>Five minutes</MenuItem>
                            <MenuItem value={10}>Ten minutes</MenuItem>
                            <MenuItem value={20}>Twenty minutes</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ ml: 8, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comments Against
                        </InputLabel>
                        <Select
                            value={formValues.commentsAgainst}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'commentsAgainst',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={true}>Allowed</MenuItem>
                            <MenuItem value={false}>Disallowed</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            PerUser PerItem
                        </InputLabel>
                        <Select
                            value={formValues.perUser}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'PerUser',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ ml: 9, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Voting Session Time
                        </InputLabel>
                        <Select
                            value={formValues.votingSessionTime}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'votingSessionTime',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={1}>One minute</MenuItem>
                            <MenuItem value={3}>Three minutes</MenuItem>
                            <MenuItem value={5}>Five minutes</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comment Session
                        </InputLabel>
                        <Select
                            value={formValues.commentSession}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'commentSession',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={1}>One minute</MenuItem>
                            <MenuItem value={3}>Three minutes</MenuItem>
                            <MenuItem value={5}>Five minutes</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ ml: 9, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            % Vote Call
                        </InputLabel>
                        <Select
                            value={formValues.voteCall}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'voteCall',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={25}>25%</MenuItem>
                            <MenuItem value={33}>33%</MenuItem>
                            <MenuItem value={50}>50%</MenuItem>
                            <MenuItem value={66}>66%</MenuItem>
                            <MenuItem value={75}>75%</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <Button type="clear" href="/dashboard">
                        Cancel
                    </Button>
                    <Box sx={{ ml: 12, mr: 12, mt: 2, mb: 6 }} />
                    <Button type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Settings;