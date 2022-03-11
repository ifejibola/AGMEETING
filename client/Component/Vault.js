import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardContent } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "item", headerName: "Item Name (job title)", width: 400 },
  { field: "age", headerName: "Age", width: 150 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "viewed", headerName: "Viewed", type: "singleSelect", width: 150 },
];

const rows = [
  {
    id: 1,
    item: "Giacomo Guilizzoni Founder & CEO",
    age: 40,
    type: "Peldi",
    viewed: null,
  },
  {
    id: 2,
    item: "Marco Botton Tuttofare",
    age: 38,
    type: null,
    viewed: null,
  },
  {
    id: 3,
    item: "Mariah Maclachlan Better Half",
    age: 41,
    type: "Patata",
    viewed: null,
  },
  {
    id: 4,
    item: "Valerie Liberty Head Chef",
    age: 70,
    type: "Val",
    viewed: null,
  },
  {
    id: 5,
    item: "Data Grid Documents",
    age: null,
    type: null,
    viewed: null,
  },
  {
    id: 6,
    item: "{65L",
    age: 0,
    type: "35",
    viewed: null,
  },
];

export default function Vault() {
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        p: 3,
      }}
    >
      <Card>
        <CardContent sx={{ height: "300px", backgroundColor: "white" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
          />
        </CardContent>
      </Card>
    </Box>
  );
}
