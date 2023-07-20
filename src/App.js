import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import NavBar from './navbar'; 
import HomePage from './homepage';
import ConstructionPage from './constructionpage';
import ContactPage from './conactpage';
import Footer from './footer'; 
import Stack from './stack'; 
import Blog from './blog'; 
import Project from './project'; 

import { blogEntries } from './blogpage'; // Importa el arreglo de entradas del blog
import BlogDetail from './blogdetail'; // Importa el componente BlogDetail


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
            <Route path="/blog" element={<Blog blogs={blogEntries} />} /> 
            <Route path="/blog/:id" element={<BlogDetail />} /> 
            <Route path="/proyectos" element={<Project />} /> 
          </Routes>
        </header>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
