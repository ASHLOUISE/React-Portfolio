import React from 'react';
import NavMenu from './NavMenu';
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

export default function App() {
    return (
      <>
      <Router>
        <NavMenu />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </Router>
      </>
    );
}
