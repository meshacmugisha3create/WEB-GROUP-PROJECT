import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Page4() {
  const [groups, setGroups] = useState([]);

  // This pulls the groups from your db.json
  const fetchGroups = () => {
    axios.get('http://localhost:5000/groups')
      .then(res => setGroups(res.data))
      .catch(err => console.error("Database connection failed:", err));
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  // This deletes a group from your database
  const handleDelete = (id) => {
    if(window.confirm("Do you want to delete this group?")) {
      axios.delete(`http://localhost:5000/groups/${id}`)
        .then(() => fetchGroups()); // Refresh the list
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        Management Dashboard (Page 4)
      </Typography>
      
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead sx={{ bgcolor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Group Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Location</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((g) => (
              <TableRow key={g.id}>
                <TableCell>{g.groupName || g.location}</TableCell>
                <TableCell>{g.location}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="error" onClick={() => handleDelete(g.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}