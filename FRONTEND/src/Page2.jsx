import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';

export default function Page2() {
  const [form, setForm] = useState({ groupName: '', course: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/groups', form);
    alert("Group Created!");
    setForm({ groupName: '', course: '', location: '' });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>New Study Group</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Group Name" margin="normal" value={form.groupName} onChange={e => setForm({...form, groupName: e.target.value})} />
          <TextField fullWidth label="Course" margin="normal" value={form.course} onChange={e => setForm({...form, course: e.target.value})} />
          <TextField fullWidth label="Location" margin="normal" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Launch</Button>
        </form>
      </Paper>
    </Box>
  );
}