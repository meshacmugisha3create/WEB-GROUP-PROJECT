import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Stack, Paper, Box } from '@mui/material';

function Page2() {
  const [groupData, setGroupData] = useState({
    groupName: '',
    courseCode: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting to Database:", groupData);
    alert("Group Created Successfully!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Create Study Group
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Group Name"
              name="groupName"
              fullWidth
              required
              value={groupData.groupName}
              onChange={handleChange}
            />
            <TextField
              label="Course Code"
              name="courseCode"
              fullWidth
              required
              value={groupData.courseCode}
              onChange={handleChange}
            />
            <TextField
              label="Meeting Location"
              name="location"
              fullWidth
              required
              value={groupData.location}
              onChange={handleChange}
            />
            <TextField
              label="Short Description"
              name="description"
              multiline
              rows={4}
              fullWidth
              value={groupData.description}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Group
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

export default Page2;