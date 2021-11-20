import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const handleSubmit = (event) => {
    pass
};

export default function Settings() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <form onSubmit={handleSubmit}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, minWidth: 400 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Event Name" variant="standard" />
                </Box>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Meeting Chair
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'meetingChair',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Year
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'year',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Place
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'place',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            3 Comments
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: '3comments',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Box sx={{ ml: 8, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comments
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'comments',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Content Time
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'contentTime',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Box sx={{ ml: 8, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comments Against
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'commentsAgainst',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            PerUser PerItem
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'PerUser',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Box sx={{ ml: 8, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Voting Session Time
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'votingSessionTime',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Comment Session
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'commentSession',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                    <Box sx={{ ml: 8, mr: 9, mt: 2 }} />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            % Vote Call
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'voteCall',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <Button type="submit">
                        Cancel
                    </Button>
                    <Box sx={{ ml: 12, mr: 12, mt: 2, mb: 6 }} />
                    <Button type="clear">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}
