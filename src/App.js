// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
// import Electronics from './pages/Electronics';
import Contacts from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

// Custom Router function
const AppRouter = () => {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/electronics" element={<Electronics />} />*/}
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
};

function App() {
  return <AppRouter />; 
}

export default App;
