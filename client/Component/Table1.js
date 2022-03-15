import { format, subDays, subHours, subMinutes, subSeconds } from "date-fns";
import numeral from "numeral";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Scrollbar from "../Scrollbar";
import useSettings from "../hooks/useSettings";

const now = new Date();

// const buttonStyle = {
//   border: "none",
//   backgroundColor: "rgba(0, 0, 0, 0)",
// };

const orders = [
  {
    id: "5eff2548979e396cb4b000ba",
    createdAt: subMinutes(subSeconds(now, 10), 7).getTime(),
    customer: {
      email: "ekaterina@devias.io",
      name: "Ekaterina Tankova",
    },
    currency: "$",
    items: 7,
    number: "DEV-1042",
    status: "pending",
    totalAmount: 524.0,
  },
  {
    id: "5eff254e46b753a166e7d7af",
    createdAt: subHours(subMinutes(subSeconds(now, 50), 12), 2).getTime(),
    customer: {
      email: "carson.darrin@devias.io",
      name: "Carson Darrin",
    },
    currency: "$",
    items: 8,
    number: "DEV-1041",
    status: "complete",
    totalAmount: 693.0,
  },
  {
    id: "5eff2553e1c551e2e28a9205",
    createdAt: subHours(subMinutes(subSeconds(now, 12), 39), 5).getTime(),
    customer: {
      email: "fran.perez@devias.io",
      name: "Fran Perez",
    },
    currency: "$",
    items: 4,
    number: "DEV-1040",
    status: "rejected",
    totalAmount: 215.0,
  },
  {
    id: "5eff25590f3e28f013c39a0e",
    createdAt: subHours(subMinutes(subSeconds(now, 21), 46), 5).getTime(),
    customer: {
      email: "anje.keiser@devias.io",
      name: "Jie Yan Song",
    },
    currency: "$",
    items: 1,
    number: "DEV-1039",
    status: "pending",
    totalAmount: 25.0,
  },
  {
    id: "5eff255f57499089243805d8",
    createdAt: subHours(subMinutes(subSeconds(now, 54), 19), 8).getTime(),
    customer: {
      name: "Clarke Gillebert",
      email: "clarke.gillebert@devias.io",
    },
    currency: "$",
    items: 5,
    number: "DEV-1038",
    status: "complete",
    totalAmount: 535.0,
  },
  {
    id: "5eff25658d416fc5adb96a3a",
    createdAt: subDays(subMinutes(subSeconds(now, 12), 45), 1).getTime(),
    customer: {
      email: "nasimiyu.danai@devias.io",
      name: "Nasimiyu Danai",
    },
    currency: "$",
    items: 2,
    number: "DEV-1037",
    status: "complete",
    totalAmount: 56.0,
  },
];

const Table1 = () => {
  const settings = useSettings();
  const [sortIndicator, setSortIndicator] = useState("desc");
  const [currentOrders, setCurrentOrders] = useState(orders);

  function sortTable() {
    if (sortIndicator == "asc") {
      setSortIndicator("desc");
    } else if (sortIndicator == "desc") {
      setSortIndicator("asc");
    }
  }

  const sortOrdersByNumber = () => {
    let sortedOrders = orders.sort((a, b) => {
      if (a.number.split("-")[1] > b.number.split("-")[1]) {
        if (sortIndicator == "desc") {
          return 1;
        } else {
          return -1;
        }
      } else if (a.number.split("-")[1] < b.number.split("-")[1]) {
        if (sortIndicator == "desc") {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    });
    setCurrentOrders(sortedOrders);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary",
        p: 3,
      }}
    >
      <Card>
        <CardHeader
          action={
            <IconButton>
              {/* <DotsHorizontalIcon fontSize="small" /> */}
            </IconButton>
          }
          title="Latest Orders"
        />
        <Divider />
        <Scrollbar>
          <Box sx={{ minWidth: 700 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection="desc">
                    <Button
                      onClick={() => {
                        sortTable();
                        sortOrdersByNumber();
                      }}
                    >
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel active direction={sortIndicator}>
                          Number
                        </TableSortLabel>
                      </Tooltip>
                    </Button>
                  </TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Items</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentOrders.map((order) => {
                  return (
                    <TableRow hover key={order.id}>
                      <TableCell>
                        <Typography color="textPrimary" variant="subtitle2">
                          {order.number}
                        </Typography>
                      </TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>
                        {numeral(order.totalAmount).format(
                          `${order.currency}0,0.00`
                        )}
                      </TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell align="right">
                        {format(order.createdAt, "dd MMM, yyyy HH:mm:ss")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>
    </Box>
  );
};

export default Table1;
