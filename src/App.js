import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar'; 
import HomePage from './homepage';
import ConstructionPage from './constructionpage';
import ContactPage from './conactpage';
import Footer from './footer'; 
import Stack from './stack'; 


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ConstructionPage />} />
            <Route path="/contact" element={<ContactPage  />} />
            <Route path="/about" element={<Stack />} />
          </Routes>
        </header>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
