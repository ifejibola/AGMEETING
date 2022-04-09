import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { format, subMinutes, subSeconds } from "date-fns";
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Tooltip,
  FormLabel,
} from "@mui/material";
import Label from "../../Label";
import Scrollbar from "../../Scrollbar";
import ArrowRightIcon from "../../icons/ArrowRight";
import DotsHorizontalIcon from "../../icons/DotsHorizontal";
import PencilAltIcon from "../../icons/PencilAlt";
import Download from "../../icons/Download";
import Plus from "../../icons/Plus";
import { FileCopy, FileDownload, Person } from "@material-ui/icons";
import axios from "axios";
import { connect } from "react-redux";
import { baseURL, getMeetingItems } from "../../actions";
import download from "downloadjs";

const now = new Date();

const orders = [
  {
    id: "5ecb8a6d9f53bfae09e16115",
    createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
    currency: "",
    customer: {
      email: "carson.darrin@devias.io",
      name: "Carson Darrin",
    },
    number: "DEV-102",
    paymentMethod: "PDF",
    status: "pending",
    totalAmount: 500.0,
  },
  {
    id: "5ecb8a738aa6f3e577c2b3ec",
    createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
    currency: "",
    customer: {
      email: "fran.perez@devias.io",
      name: "Fran Perez",
    },
    number: "DEV-101",
    paymentMethod: "DOC",
    status: "completed",
    totalAmount: 500.0,
  },
];

const getStatusLabel = (paymentStatus) => {
  const map = {
    canceled: {
      color: "error",
      text: "Canceled",
    },
    completed: {
      color: "success",
      text: "Completed",
    },
    pending: {
      color: "warning",
      text: "Pending",
    },
    rejected: {
      color: "error",
      text: "Rejected",
    },
  };

  const { text, color } = map[paymentStatus];

  return <Label color={color}>{text}</Label>;
};

const Vault = (props) => {
  const [fileUploadDialog, openFileUploadDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploadSuccess, setFileUploadSuccess] = useState(false);

  useEffect(() => {
    props.onGetMeetingItems();
  }, []);

  const open = () => {
    openFileUploadDialog(true);
  };
  const close = () => {
    openFileUploadDialog(false);
    setFileUploadSuccess(false);
  };
  const handleCapture = ({ target }) => {
    setSelectedFile(target.files[0]);
  };

  //handle item upload
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("uploaded_file", selectedFile);
    axios
      .post(baseURL + "/items/upload", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setFileUploadSuccess(true);
        }
      })
      .catch((err) => {
        alert("failed to upload");
      });
  };

  //handle item donwnload
  const getItem = (filePath, fileName, mimeType) => {
    axios
      .get(baseURL + "/items/getItem", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        params: {
          filepath: filePath,
          fileName: fileName,
        },
      })
      .then((res) => {
        console.log(res);
        download(res.data, fileName, mimeType);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Card>
        <CardHeader
          action={
            <>
              {props.user.is_mod && (
                <IconButton>
                  <DotsHorizontalIcon fontSize="small" onClick={open} />
                </IconButton>
              )}
            </>
          }
          title="Vault"
        />
        <Dialog open={fileUploadDialog} onClose={close}>
          <DialogTitle>Upload File To Meeting Vault</DialogTitle>
          <input
            className={"blah"}
            id="faceImage"
            type="file"
            onChange={handleCapture}
            hidden={true}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Tooltip title="Select File">
              <FormLabel htmlFor="faceImage">
                <IconButton
                  className={"blah"}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <FileCopy fontSize="large" />
                </IconButton>
              </FormLabel>
            </Tooltip>
            <FormLabel>
              {selectedFile ? selectedFile.name : "Select File"}
            </FormLabel>
          </Box>
          <Button onClick={() => handleSubmit()} color="primary">
            Upload
          </Button>
          {fileUploadSuccess && (
            <Typography color={"red"}>Successfully uploaded file</Typography>
          )}
        </Dialog>
        <Divider />
        <Scrollbar>
          <Box sx={{ minWidth: 1150 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>File Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.items?.map((item) => (
                  <TableRow hover key={item.id}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>
                      <Typography color="textPrimary" variant="subtitle2">
                        {item.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textPrimary" variant="subtitle2">
                        {item.file_name}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {item.description}
                      </Typography>
                    </TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell>{""}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                      <a download>
                        <IconButton
                          onClick={() => {
                            getItem(
                              item.filepath,
                              item.file_name,
                              item.description
                            );
                          }}
                        >
                          <Download fontSize="small" />
                        </IconButton>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={orders.length}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          page={0}
          rowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.currentUser,
    items: state.itemReducer.meetingItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMeetingItems: () => {
      dispatch(getMeetingItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vault);
