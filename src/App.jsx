import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Home from './pages/home/Home';
import AboutMe from './pages/about/AboutMe';
import Work from './pages/work/Work';
import CV from './pages/cv/CV';
import Contact from './pages/contact/Contact';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/cv' element={<CV />}/>
        <Route path='/contact' element={<Contact />}/>
      </ Routes>
      <Nav />
    </div>
  );
}

export default App;