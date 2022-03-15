import {TextField} from '@material-ui/core';
import React from "react";

const columns = [
    {field: 'field'}
]

const rows = [
    { field: "Participant List"},
    { field: "1. Kim"},
    { field: "2. Brian"},
    { field: "3. Care"},
    { field: "..."},
    { field: "Quorum: 11% / Minimum: 50%"},
]

export default function RollCall() {
    return (  
        <div style={{ display: 'flex', height: 400, width: '90%' }}>
            <TextField 
                disabled
                multiline
                rows={rows}
                columns={columns}
                size="large"
                fullWidth
                label=""
                variant='outlined'
                sx = {{
                    Height: '100%',
                }}
            />
        </div>
    );
}