import React, { useState } from 'react';
import { 
  TextField, Button, Typography, Container, Stack, Paper, Box, InputAdornment 
} from '@mui/material';
import { 
  GroupAdd, Book, LocationOn, Description, AutoAwesome 
} from '@mui/icons-material';

function Page2() {
  const [groupData, setGroupData] = useState({
    name: '',
    course: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Group Data:", groupData);
    alert("✨ Group Created Successfully!");
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Soft professional background
      display: 'flex', 
      alignItems: 'center', 
      py: 5 
    }}>
      <Container maxWidth="sm">
        <Paper elevation={10} sx={{ p: 4, borderRadius: 4, textAlign: 'center' }}>
          
          {/* Header Section with Icon */}
          <Box sx={{ mb: 3 }}>
            <AutoAwesome color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
              Create Study Group
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fill in the details below to start collaborating with your peers at UCU.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Group Name"
                name="name"
                required
                variant="outlined"
                value={groupData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><GroupAdd color="action" /></InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Course Name or Code"
                name="course"
                required
                placeholder="e.g., CSC1202"
                value={groupData.course}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Book color="action" /></InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Meeting Location"
                name="location"
                required
                placeholder="e.g., Hamu Mukasa Library or Zoom"
                value={groupData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><LocationOn color="action" /></InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Short Description"
                name="description"
                multiline
                rows={3}
                placeholder="What topics will this group focus on?"
                value={groupData.description}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Description color="action" /></InputAdornment>
                  ),
                }}
              />

              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                sx={{ 
                  py: 1.5, 
                  borderRadius: 2, 
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                }}
              >
                Launch Study Group
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Page2;