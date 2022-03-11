import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation'
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
