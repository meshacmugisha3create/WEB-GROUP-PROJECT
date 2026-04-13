import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './GetStarted';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4'; 
import Page5 from './page5';
import Page6 from './page6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} /> 
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </Router>
  );
}

export default App;