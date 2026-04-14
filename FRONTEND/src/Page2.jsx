// Create study group page
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';

export default function Page2() {
  // State to store the group creation form data
  const [form, setForm] = useState({ groupName: '', course: '', location: '' });

  // Handle form submission to create a new group
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send group data to the server
    await axios.post('http://localhost:5000/groups', form);
    alert("Group Created!");
    setForm({ groupName: '', course: '', location: '' }); // Clear the form
  };

  // Render create group form
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>New Study Group</Typography>
        {/* Group creation form */}
        <form onSubmit={handleSubmit}>
          {/* Group name input */}
          <TextField fullWidth label="Group Name" margin="normal" value={form.groupName} onChange={e => setForm({...form, groupName: e.target.value})} />
          {/* Course input */}
          <TextField fullWidth label="Course" margin="normal" value={form.course} onChange={e => setForm({...form, course: e.target.value})} />
          {/* Location input */}
          <TextField fullWidth label="Location" margin="normal" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          {/* Submit button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Launch</Button>
        </form>
      </Paper>
    </Box>
  );
}