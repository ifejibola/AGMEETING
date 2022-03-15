import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardContent } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "item", headerName: "Item Name (job title)", width: 250 },
  { field: "votes", headerName: "Votes", width: 150 },
  { field: "status", headerName: "Status", width: 110 },
  { field: "exampleIn", headerName: "Example In", type: "singleSelect", width: 110 },
  { field: "email", headerName: "Email", width: 150 }
];

const rows = [
  {
    id: 1,
    item: "Giacomo Guilizzoni Founder & CEO",
    votes: 40,
    status: "Peldi",
    exampleIn: null,
    email: null,
  },
  { 
    id: 2, 
    item: "Marco Botton Tuttofare", 
    votes: 38, 
    status: null, 
    exampleIn: null,
    email: null,
  },
  {
    id: 3,
    item: "Mariah Maclachlan Better Half",
    votes: 41,
    status: "Patata",
    exampleIn: null,
    email: null,
  },
  {
    id: 4,
    item: "Valerie Liberty Head Chef",
    votes: 70,
    status: "Val",
    exampleIn: null,
    email: null,
  },
  { 
    id: 5, 
    item: "Data Grid Documents", 
    votes: null, 
    status: null, 
    exampleIn: null,
    email: null, 
  },
  { 
    id: 6, 
    item: "{65L", 
    votes: 0, 
    status: "35", 
    exampleIn: null,
    email: null, 
  },
];

export default function LoggedInUsers() {
  return (  
    <div style={{ display: 'flex', height: 400, width: '90%' }}>
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
