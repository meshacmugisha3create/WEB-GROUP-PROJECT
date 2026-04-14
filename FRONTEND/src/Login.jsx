import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form3, setForm3] = useState({
    Username: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleSubmit3 = async (e) => {
    e.preventDefault();

  if (!form3.Username || !form3.Password) {
    alert("Please fill in all fields");
    return;
  }

    try {
      const res = await axios.get("http://localhost:5000/users");

      const user = res.data.find(
        (u) =>
          u.Username === form3.Username &&
          u.Password === form3.Password
      );

      if (user) {
        alert("Login successful ✅");
        navigate("/Page1");
      } else {
        alert("Invalid credentials or not registered!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          LOGIN
        </Typography>

        <form onSubmit={handleSubmit3}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={form3.Username}
            onChange={(e) =>
              setForm3({ ...form3, Username: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={form3.Password}
            onChange={(e) =>
              setForm3({ ...form3, Password: e.target.value })
            }
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>

          {/* FIXED REGISTER BUTTON */}
          <Button
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => navigate('/Register')}
          >
            Register
          </Button>

        </form>
      </Paper>
    </Box>
  );
}