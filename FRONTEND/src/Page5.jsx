// User profile page showing user information and statistics
import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, Avatar, Divider, Grid } from '@mui/material';
import axios from 'axios';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Page5() {
  // State to store the count of study groups
  const [count, setCount] = useState(0);

  // Fetch the number of groups when component loads
  useEffect(() => {
    axios.get('http://localhost:5000/groups')
      .then(res => setCount(res.data.length))
      .catch(() => setCount(0));
  }, []);

  // Render profile page with user info and statistics
  return (
    <Container sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: '#ffffff' }}>
        {/* Profile avatar */}
        <Avatar sx={{ bgcolor: '#1a237e', width: 100, height: 100, margin: 'auto', mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 60 }} />
        </Avatar>
        {/* User title */}
        <Typography variant="h4" fontWeight="bold" color="primary">Developer Profile</Typography>
        {/* Degree information */}
        <Typography variant="h6" color="textSecondary">Bachelor of Science in Information Technology</Typography>
        {/* University name */}
        <Typography variant="body1">Uganda Christian University (UCU)</Typography>

        <Divider sx={{ my: 4 }} />

        {/* Statistics section */}
        <Grid container spacing={3}>
          {/* Groups count card */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#f0f4f8', borderRadius: 3 }}>
              <DashboardIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold">{count}</Typography>
              <Typography variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                Groups in Database
              </Typography>
            </Box>
          </Grid>
          {/* System status card */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#f0f4f8', borderRadius: 3 }}>
              <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold">Active</Typography>
              <Typography variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                System Status
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}