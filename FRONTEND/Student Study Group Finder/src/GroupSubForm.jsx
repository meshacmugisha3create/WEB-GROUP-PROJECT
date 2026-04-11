import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // The tool for navigation
import axios from 'axios'; // The tool for connecting to the database
import { Box, Container, Paper, Stack, Typography, TextField, Button } from '@mui/material'; // Matches your UI components

export default function GroupSubForm() {
  const navigate = useNavigate(); // Initialize the "driver"

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Capture the data from your form fields
    const formData = {
      groupName: e.target.groupName.value,
      course: e.target.course.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    try {
      // 2. Send the data to your backend engine (Port 5000)
      await axios.post('http://localhost:5000/groups', formData);
      
      // 3. Show success message
      alert("Group Created Successfully!");

      // 4. THE FIX: Automatically navigate to Page 3 to see the list
      navigate('/page3'); 

    } catch (err) {
      console.error("Database Error:", err);
      alert("Failed to save. Make sure your Backend (npx json-server) is running!");
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Create Study Group
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            Fill in the details below to start collaborating with your peers at UCU.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField 
                fullWidth 
                label="Group Name" 
                name="groupName" 
                required 
                variant="outlined" 
              />
              <TextField 
                fullWidth 
                label="Course Name or Code" 
                name="course" 
                required 
                variant="outlined" 
              />
              <TextField 
                fullWidth 
                label="Meeting Location" 
                name="location" 
                required 
                variant="outlined" 
              />
              <TextField 
                fullWidth 
                label="Short Description" 
                name="description" 
                multiline 
                rows={3} 
                variant="outlined" 
                placeholder="What topics will this group focus on?"
              />
              
              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                sx={{ 
                  py: 1.5, 
                  textTransform: 'none', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem' 
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