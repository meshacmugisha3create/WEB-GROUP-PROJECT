import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form2, setForm2] = useState({ FirstName: '', SecondName: '', Username: '', Password: '', Course: '' , year: ''});

  const navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    if (!form2.Username || !form2.Password) {
    alert("Please fill in all fields");
    return;
  }

    await axios.post('http://localhost:5000/users', form2);
    alert("Registered successfully");
    navigate("/")
    setForm2({ FirstName: '', SecondName: '', Username: '', Password: '', Course: '' , year: '' });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit2}>
          <TextField fullWidth label="First Name" margin="normal" value={form2.FirstName} onChange={e => setForm2({...form2, FirstName: e.target.value})} />
          <TextField fullWidth label="Second Name" margin="normal" value={form2.SecondName} onChange={e => setForm2({...form2, SecondName: e.target.value})} />
          <TextField fullWidth label="Username" margin="normal" value={form2.Username} onChange={e => setForm2({...form2, Username: e.target.value})} />
          <TextField fullWidth label="Pasword" margin="normal" value={form2.Password} onChange={e => setForm2({...form2, Password: e.target.value})} />
        <TextField fullWidth label="Course" margin="normal" value={form2.Course} onChange={e => setForm2({...form2, Course: e.target.value})} />
        <TextField fullWidth label="year of study" margin="normal" value={form2.year} onChange={e => setForm2({...form2, year: e.target.value})} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Register</Button>
        </form>
      </Paper>
    </Box>
  );
}