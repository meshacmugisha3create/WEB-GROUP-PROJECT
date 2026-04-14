// Main App component that handles routing and navigation
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

// Import all the page components
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6'; 
import Register from './Register';
import Login from './Login';

// Main application component with navigation bar and routing
function App() {
  return (
    <Router>
      {/* Navigation bar at the top */}
      <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'}}>
        <Toolbar>
          {/* App title */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            UCU CONNECT
          </Typography>
          {/* Navigation buttons */}
          <Box>
            <Button color="inherit" component={Link} to="/">Create</Button>
            <Button color="inherit" component={Link} to="/page3">View</Button>
            <Button color="inherit" component={Link} to="/page4">Admin</Button>
            <Button color="inherit" component={Link} to="/page5">Profile</Button>
            <Button color="inherit" component={Link} to="/page6">Help</Button>
            <Button color="inherit" component={Link} to="/">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page content area */}
      <Container sx={{ mt: 4 }}>
        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;