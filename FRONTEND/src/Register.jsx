// Registration component for creating new user accounts
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  // State to store registration form data
  const [form2, setForm2] = useState({ FirstName: '', SecondName: '', Username: '', Password: '', Course: '' , year: ''});

  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Handle form submission for registration
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!form2.Username || !form2.Password) {
      alert("Please fill in all fields");
      return;
    }

    // Send new user data to the server
    await axios.post('http://localhost:5000/users', form2);
    alert("Registered successfully");
    navigate("/") // Go back to login page
    setForm2({ FirstName: '', SecondName: '', Username: '', Password: '', Course: '' , year: '' }); // Clear form
  };

  // Render registration form UI
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>Register</Typography>
        {/* Registration form */}
        <form onSubmit={handleSubmit2}>
          {/* First name input */}
          <TextField fullWidth label="First Name" margin="normal" value={form2.FirstName} onChange={e => setForm2({...form2, FirstName: e.target.value})} />
          {/* Last name input */}
          <TextField fullWidth label="Second Name" margin="normal" value={form2.SecondName} onChange={e => setForm2({...form2, SecondName: e.target.value})} />
          {/* Username input */}
          <TextField fullWidth label="Username" margin="normal" value={form2.Username} onChange={e => setForm2({...form2, Username: e.target.value})} />
          {/* Password input */}
          <TextField fullWidth label="Pasword" margin="normal" value={form2.Password} onChange={e => setForm2({...form2, Password: e.target.value})} />
          {/* Course input */}
          <TextField fullWidth label="Course" margin="normal" value={form2.Course} onChange={e => setForm2({...form2, Course: e.target.value})} />
          {/* Year of study input */}
          <TextField fullWidth label="year of study" margin="normal" value={form2.year} onChange={e => setForm2({...form2, year: e.target.value})} />
          {/* Submit button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>Register</Button>
        </form>
      </Paper>
    </Box>
  );
}