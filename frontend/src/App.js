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
import Connexion  from './pages/Connexion';
import Books from './pages/Books';
import Profile from './pages/Profile';
import { hasAuthenticated } from './services/AuthApi.js';
import { AuthContext } from './contexts/AuthContext';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import { useEffect } from 'react';
import axios from 'axios';


const App = () => {

  const [isAuthenticated, setIsAuthenticated]= useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      });
  }, []);


  return (

    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
  
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Roman" element={<Roman />} />
          <Route path="/Jeunesse" element={<Jeunesse />} />
          <Route path="/Autre" element={<Autre />} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/Notfound" element={<Notfound />} />
          <Route path="/Books/:bookId" element={<Books/>} />
          
        </Routes>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
