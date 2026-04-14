// Login component for user authentication
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // State to store login form data (username and password)
  const [form3, setForm3] = useState({
    Username: '',
    Password: ''
  });

  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Handle form submission for login
  const handleSubmit3 = async (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!form3.Username || !form3.Password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Fetch all users from the server
      const res = await axios.get("http://localhost:5000/users");

      // Search for a user with matching username and password
      const user = res.data.find(
        (u) =>
          u.Username === form3.Username &&
          u.Password === form3.Password
      );

      // If user found, login is successful
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

  // Render login form UI
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <div className = "barpic"></div>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          LOGIN
        </Typography>
        {/* Login form */}
        <form onSubmit={handleSubmit3}>
          {/* Username input field */}
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={form3.Username}
            onChange={(e) =>
              setForm3({ ...form3, Username: e.target.value })
            }
          />

          {/* Password input field */}
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

          {/* Login button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>

          {/* Button to navigate to registration page */}
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