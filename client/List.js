import React from "react";
import Container from '@mui/material/Container';

const participants = ['Kim', 'Brian', 'Care'];
const listItems = participants.map((participant) =>
  <li>{participant}<br/><br/></li>
);



function List() {
    return (
        
        <div style={{ height: 900, width: '100%' }}>
            <div style={{ height: '50%', width: '70%' , border: '1px solid gray', margin: '3% auto auto 3%' }}>
                <div id='list' style={{margin: 'auto auto auto 3%'}}>
                    <h3>Participants</h3><br/>
                    <ol>
                        {listItems}
                    </ol>
                    <br/>
                    <br/><br/>
                    Quorum : 11 % / Minimum : 50%
                </div>
            </div>
      
    </div>
    
    
    )
}




export default List;