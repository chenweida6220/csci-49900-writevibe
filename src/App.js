import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Background from './components/background';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />} /> {/*Leave path for background empty bc it's rendered first */}
        {/* <Route path="/path/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
