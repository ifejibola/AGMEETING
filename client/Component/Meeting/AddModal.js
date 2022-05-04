import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PencilAltIcon from "../../icons/PencilAlt";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import validator from "validator";
import axios from "axios";
import {userService} from "../../../server/services/user.service"
import Plus from "../../icons/Plus";
import { meetingService } from "../../../server/services/meeting.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddModal(id) {
    const [open, setOpen] = React.useState(false);
    const [addMeetingError, setAddMeetingError] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const modId = data.get("modId");
        const companyId = data.get("companyId");
        const timeStart = data.get("timeStart");
        const timeEnd = data.get("timeEnd");
        // make sure email is valid
        if (!modId) {
            setAddMeetingError("Moderator Id must not be empty");
        }
        else if (!companyId) {
            setAddMeetingError("Company Id must not be empty");
        }
        else if (!timeStart) {
            setAddMeetingError("Time start must not be empty");
        }
        else if (!timeEnd) {
            setAddMeetingError("Time end must not be empty");
        }
        else {
            await meetingService.addMeeting(modId, id.id, companyId, timeStart, timeEnd)
                .then(response => {
                    console.log(response);
                    setAddMeetingError(response);
                })
                .catch(error => {
                    setAddMeetingError("Errors occurred. Please contact technical support.");
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                color="primary"
                startIcon={<Plus fontSize="small" />}
                sx={{ m: 1 }}
                variant="contained"
            >
                Add Meeting
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style} component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h8">
                            Add New Meeting
                        </Typography>
                        <Typography variant="h11">
                            *Date field is in YYYY-MM-DD format
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="modId"
                                label="Assign moderator"
                                name="modId"
                                autoComplete="modId"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="companyId"
                                label="Assign company"
                                type="companyId"
                                id="companyId"
                                autoComplete="companyId"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="timeStart"
                                label="Assign time start"
                                type="timeStart"
                                id="timeStart"
                                autoComplete="timeStart"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="timeEnd"
                                label="Assign time end"
                                type="timeEnd"
                                id="timeEnd"
                            />
                            <Typography component="h3" variant="h8" color={"#b30000"}>
                                {addMeetingError}
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add meeting
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}