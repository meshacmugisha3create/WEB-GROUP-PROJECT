// Admin page to manage and delete study groups
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@mui/material';
import axios from 'axios';

export default function Page4() {
  // State to store all groups
  const [groups, setGroups] = useState([]);
  
  // Function to fetch all groups from server
  const load = () => axios.get('http://localhost:5000/groups').then(res => setGroups(res.data));
  
  // Fetch groups when component loads
  useEffect(() => { load(); }, []);

  // Function to delete a group by ID
  const del = (id) => axios.delete(`http://localhost:5000/groups/${id}`).then(() => load());

  return (
    <Paper sx={{ p: 3 }}>
      {/* Table to display all groups */}
      <Table>
        {/* Table header */}
        <TableHead><TableRow><TableCell>Group Name</TableCell><TableCell>Action</TableCell></TableRow></TableHead>
        {/* Table body with group data */}
        <TableBody>
          {/* Display each group as a table row */}
          {groups.map(g => (
            <TableRow key={g.id}>
              <TableCell>{g.groupName}</TableCell>
              {/* Delete button for each group */}
              <TableCell><Button color="error" onClick={() => del(g.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}