import './styles/index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';


import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Roman from './pages/Roman';
import Jeunesse from './pages/Jeunesse';
import Autre from './pages/Autre';
import Notfound from './pages/Notfound';


const App = () => {


  return (
  
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Roman" element={<Roman />} />
          <Route path="/Jeunesse" element={<Jeunesse />} />
          <Route path="/Autre" element={<Autre />} />
          <Route path="/Notfound" element={<Notfound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
