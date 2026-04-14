// View all study groups page
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

export default function Page3() {
  // State to store all groups
  const [groups, setGroups] = useState([]);
  
  // Fetch all groups when component loads
  useEffect(() => {
    axios.get('http://localhost:5000/groups').then(res => setGroups(res.data));
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Display each group as a card */}
      {groups.map(g => (
        <Grid item xs={12} sm={6} md={4} key={g.id}>
          <Card sx={{ borderLeft: '5px solid #1a237e' }}>
            <CardContent>
              {/* Group name */}
              <Typography variant="h6">{g.groupName}</Typography>
              {/* Course name */}
              <Typography color="textSecondary">{g.course}</Typography>
              {/* Location with pin emoji */}
              <Typography variant="body2">📍 {g.location}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}