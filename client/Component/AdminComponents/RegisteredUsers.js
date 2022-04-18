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
} from "@mui/material";
import Scrollbar from "../../Scrollbar";
import EditModal from "./EditModal";
import ArrowRightIcon from "../../icons/ArrowRight";
import PencilAltIcon from "../../icons/PencilAlt";
import SearchIcon from "../../icons/Search";
import { userService } from "../../../server/services/user.service";

import Comments from "./Comments";

const now = new Date();

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

const RegisteredUsers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(async () => {
    await userService
      .getAll()
      .then((customersList) => {
        setCustomers(customersList);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

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
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Company Id</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow hover key={customer.id}>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar
                          alt={customer.client_name}
                          sx={{
                            height: 42,
                            width: 42,
                          }}
                        />
                        <Box sx={{ ml: 1 }}>
                          <Link color="inherit" variant="subtitle2">
                            {customer.client_name}
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="body2">
                        {customer.email}
                      </Typography>
                    </TableCell>
                    <TableCell>{customer.role}</TableCell>
                    <TableCell>{customer.company_id}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <EditModal id={customer.id} />
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

export default RegisteredUsers;
