import React, {useState} from "react";
import {
    Box,
    Typography,
    Button,
    Modal
} from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 20,
  p: 3,
};

export default function RollCall() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="large" variant="outlined" onClick={handleOpen}>Roll Call</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Participant List
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <Typography>
            1. Kim
            </Typography>
            <Typography>
            2. Brian
            </Typography>
            <Typography>
            3. Care
            </Typography>
            <Typography>
            ...
            </Typography>
            <Typography>
            Quorum: 11% / Minimum: 50%
            </Typography>
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}

