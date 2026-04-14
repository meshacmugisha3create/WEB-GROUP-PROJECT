import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, Avatar, Divider, Grid } from '@mui/material';
import axios from 'axios';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Page5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/groups')
      .then(res => setCount(res.data.length))
      .catch(() => setCount(0));
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, textAlign: 'center', background: '#ffffff' }}>
        <Avatar sx={{ bgcolor: '#1a237e', width: 100, height: 100, margin: 'auto', mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 60 }} />
        </Avatar>
        <Typography variant="h4" fontWeight="bold" color="primary">Developer Profile</Typography>
        <Typography variant="h6" color="textSecondary">Bachelor of Science in Information Technology</Typography>
        <Typography variant="body1">Uganda Christian University (UCU)</Typography>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#f0f4f8', borderRadius: 3 }}>
              <DashboardIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold">{count}</Typography>
              <Typography variant="body2" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                Groups in Database
              </Typography>
            </Box>
          </Grid>
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