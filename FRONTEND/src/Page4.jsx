import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@mui/material';
import axios from 'axios';

export default function Page4() {
  const [groups, setGroups] = useState([]);
  const load = () => axios.get('http://localhost:5000/groups').then(res => setGroups(res.data));
  useEffect(() => { load(); }, []);

  const del = (id) => axios.delete(`http://localhost:5000/groups/${id}`).then(() => load());

  return (
    <Paper sx={{ p: 3 }}>
      <Table>
        <TableHead><TableRow><TableCell>Group Name</TableCell><TableCell>Action</TableCell></TableRow></TableHead>
        <TableBody>
          {groups.map(g => (
            <TableRow key={g.id}>
              <TableCell>{g.groupName}</TableCell>
              <TableCell><Button color="error" onClick={() => del(g.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}