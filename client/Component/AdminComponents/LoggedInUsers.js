import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { subDays, subHours } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Tooltip,
  FormLabel,
  DialogContent,
} from "@mui/material";
import Scrollbar from "../../Scrollbar";
import ArrowRightIcon from "../../icons/ArrowRight";
import PencilAltIcon from "../../icons/PencilAlt";
import SearchIcon from "../../icons/Search";
import Trash from "../../icons/Trash";

import Comments from "./Comments";
import { baseURL, getMeetingParticipants } from "../../actions";
import axios from "axios";
import { connect } from "react-redux";

const now = new Date();

const customers = [
  {
    id: "5e887ac47eed253091be10cb",
    avatar: "/static/mock-images/avatars/avatar-carson_darrin.png",
    city: "Cleveland",
    country: "USA",
    currency: "$",
    email: "carson.darrin@devias.io",
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: "Carson Darrin",
    state: "Ohio",
    totalAmountSpent: 300.0,
    totalOrders: 3,
    updatedAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/static/mock-images/avatars/avatar-fran_perez.png",
    city: "Atlanta",
    country: "USA",
    currency: "$",
    email: "fran.perez@devias.io",
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: "Fran Perez",
    state: "Georgia",
    totalAmountSpent: 0.0,
    totalOrders: 0,
    updatedAt: subDays(subHours(now, 1), 2).getTime(),
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    city: "North Canton",
    country: "USA",
    currency: "$",
    email: "jie.yan.song@devias.io",
    hasAcceptedMarketing: false,
    isProspect: false,
    isReturning: false,
    name: "Jie Yan Song",
    state: "Ohio",
    totalAmountSpent: 5600.0,
    totalOrders: 6,
    updatedAt: subDays(subHours(now, 4), 2).getTime(),
  },
  {
    id: "5e86809283e28b96d2d38537",
    avatar: "/static/mock-images/avatars/avatar-jane_rotanson.png",
    city: "Madrid",
    country: "Spain",
    currency: "$",
    email: "jane.rotanson@devias.io",
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: "Jane Rotanson",
    state: "Madrid",
    totalAmountSpent: 500.0,
    totalOrders: 1,
    updatedAt: subDays(subHours(now, 11), 2).getTime(),
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    avatar: "/static/mock-images/avatars/avatar-miron_vitold.png",
    city: "San Diego",
    country: "USA",
    currency: "$",
    email: "miron.vitold@devias.io",
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: "Miron Vitold",
    totalAmountSpent: 0.0,
    totalOrders: 0,
    state: "California",
    updatedAt: subDays(subHours(now, 7), 3).getTime(),
  },
];

const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Accepts Marketing",
    value: "hasAcceptedMarketing",
  },
  {
    label: "Prospect",
    value: "isProspect",
  },
  {
    label: "Returning",
    value: "isReturning",
  },
];

const sortOptions = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
  {
    label: "Total orders (highest)",
    value: "orders|desc",
  },
  {
    label: "Total orders (lowest)",
    value: "orders|asc",
  },
];

//Moderator component to view the users within their meeting, protected by the ModeratorRoute component
const LoggedinUsers = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [error, setError] = useState(false);
  //get all the meeting participants
  useEffect(() => {
    props.onGetMeetingParticpants();
  }, []);

  //can select users for deletion, called when this list of users changes
  const changeSelectedUsers = (e, participant) => {
    if (e.target.checked) {
      setSelectedUsers([...selectedUsers, participant]);
    } else {
      if (selectedUsers.length === 1) {
        setSelectedUsers([]);
      } else {
        setSelectedUsers(
          selectedUsers.splice(selectedUsers.indexOf(participant), 1)
        );
      }
    }
  };

  const open = () => {
    setDeleteDialog(true);
  };

  const close = () => {
    setError(null);
    setDeleteDialog(false);
  };

  //called when the button to delete the selected users is clicked
  const handleSubmit = () => {
    if (
      selectedUsers
        .map((user) => {
          return user.id;
        })
        .includes(props.currentUser.id)
    ) {
      throw "Failure: Cannot delete yourself";
    } else {
      setError(null);
      axios
        .post(
          baseURL + "/participants/deleteParticipant",
          selectedUsers.map((user) => user.id),
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then((data) => {
          setSelectedUsers([]);
          setError("User(s) deleted");
          props.onGetMeetingParticpants();
        })
        .catch((error) => {
          setError("" + error);
        });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
      }}
    >
      <Card>
        <Divider />
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            m: -1,
            p: 2,
          }}
        >
          <Box
            sx={{
              m: 1,
              maxWidth: "100%",
              width: 500,
            }}
          >
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              placeholder="Search customers"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              m: 1,
              width: 240,
            }}
          >
            <TextField
              label="Sort By"
              name="sort"
              select
              SelectProps={{ native: true }}
              variant="outlined"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Button
            disabled={selectedUsers.length > 0 ? false : true}
            onClick={() => {
              open();
            }}
          >
            <Trash></Trash>
          </Button>
          <Dialog open={deleteDialog} onClose={close}>
            <DialogTitle>
              Are You Sure You Want to Delete the Following Users?
            </DialogTitle>
            <DialogContent>
              {selectedUsers.map((user) => {
                return <Typography>{user.email}</Typography>;
              })}
              {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
            </DialogContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></Box>
            <Button
              onClick={() => {
                try {
                  handleSubmit();
                } catch (e) {
                  setError(e);
                }
              }}
              color="primary"
            >
              Delete
            </Button>
            {/* {fileUploadSuccess && (
              <Typography color={"red"}>Successfully uploaded file</Typography>
            )} */}
          </Dialog>
        </Box>
        <Scrollbar>
          <Box sx={{ minWidth: 700 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Orders</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.meetingParticipants?.map((participant) => (
                  <TableRow hover key={participant.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        onChange={(e) => {
                          changeSelectedUsers(e, participant);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar
                          src={""}
                          sx={{
                            height: 42,
                            width: 42,
                          }}
                        />
                        <Box sx={{ ml: 1 }}>
                          <Link color="inherit" variant="subtitle2">
                            {participant.email}
                          </Link>
                          <Typography color="textSecondary" variant="body2">
                            {participant.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{``}</TableCell>
                    <TableCell>{}</TableCell>
                    <TableCell>
                      {participant.is_mod ? "Moderator" : "Participant"}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                      <IconButton>
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={customers.length}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          page={0}
          rowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
        />
        <Comments />
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    meetingParticipants: state.userReducer.meetingParticipants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMeetingParticpants: () => {
      dispatch(getMeetingParticipants());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedinUsers);
