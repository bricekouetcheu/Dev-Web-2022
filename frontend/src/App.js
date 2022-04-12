import './styles/index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';


import Homepage from './pages/Homepage';
import Roman from './pages/Roman';
import Jeunesse from './pages/Jeunesse';
import Autre from './pages/Autre';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import Test from './pages/Test';


const App = () => {


  return (
  
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Roman" element={<Roman />} />
          <Route path="/Jeunesse" element={<Jeunesse />} />
          <Route path="/Autre" element={<Autre />} />
          <Route path="/Test" element={<Test/>} />
          <Route path="/Notfound" element={<Notfound />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
