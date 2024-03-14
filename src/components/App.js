import React from 'react';
import NavMenu from './NavMenu';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
