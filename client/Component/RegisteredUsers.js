import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardContent } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "item", headerName: "Item Name (job title)", width: 250 },
  { field: "example", headerName: "Example", width: 150 },
  { field: "status", headerName: "Status", width: 110 },
  {
    field: "placeholder",
    headerName: "placeholder",
    type: "singleSelect",
    width: 110,
  },
  { field: "email", headerName: "Email", width: 150 },
];

const rows = [
  {
    id: 1,
    item: "Giacomo Guilizzoni Founder & CEO",
    example: 40,
    status: "Peldi",
    placeholder: null,
    email: null,
  },
  {
    id: 2,
    item: "Marco Botton Tuttofare",
    example: 38,
    status: null,
    placeholder: null,
    email: null,
  },
  {
    id: 3,
    item: "Mariah Maclachlan Better Half",
    example: 41,
    status: "Patata",
    placeholder: null,
    email: null,
  },
  {
    id: 4,
    item: "Valerie Liberty Head Chef",
    example: 70,
    status: "Val",
    placeholder: null,
    email: null,
  },
  {
    id: 5,
    item: "Data Grid Documents",
    example: null,
    status: null,
    placeholder: null,
    email: null,
  },
  {
    id: 6,
    item: "{65L",
    example: 0,
    status: "35",
    placeholder: null,
    email: null,
  },
];

export default function RegisteredUsers() {
  return (
    <div style={{ display: "flex", height: 400, width: "90%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
