import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <Box sx={{ textAlign: 'center', py: 10, mt: 20, mx: 26, bgcolor: '#f0f4f8', borderRadius: 4 }}>
      <Typography variant="h2" color="primary" fontWeight="bold">UCU Study Finder</Typography>
      <Typography variant="h5" sx={{ my: 3 }}>Master your BSIT course units together.</Typography>
      <Button variant="contained" size="large" component={Link} to="/page2">Create a Group</Button>
    </Box>
  );
}