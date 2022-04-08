import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

async function onSubmitForm(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  // console.log(data);
  // const docFiles = data.get("FileName");
  // const comments = data.get("commentFile");
  // const file = data.get("theFile");
  // console.log(file);
  await axios
    .post("http://localhost:3000/api/v1/file", data, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// TODO: Style the modal and also make the comment text box bigger
const FileModal = () => {
  const [open, setOpen] = useState(false);
  // need to add state to store name, file data and comment
  const [fileName, setFileName] = useState("");
  const [comment, setComment] = useState("");
  // state for file selection
  const [selectedFile, setSelectedFile] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //onSubmitForm which prevent default and also calls axios

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        File Upload
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={onSubmitForm}>
          <Box sx={style}>
            <TextField
              name="FileName"
              value={fileName}
              label="Enter the File Name"
              variant="outlined"
              onChange={(e) => setFileName(e.target.value)}
            />
            <TextField
              name="commentFile"
              label="Add your comment"
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <input
              name="theFile"
              type="file"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.value)}
            />

            <Button type="submit" variant="contained">
              Add this file
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default FileModal;
