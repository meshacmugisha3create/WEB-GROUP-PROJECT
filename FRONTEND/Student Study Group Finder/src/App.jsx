<<<<<<< Updated upstream
// src/App.jsx
import React from "react";
import page3 from "./pages/page3"; // Import the page component

function App() {
  return (
    <div className="App">
      <page3 /> {/* Render page 3 */}
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4'; // Ensure the 'p' matches your filename
import Page5 from './page5';
import Page6 from './page6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} /> 
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;