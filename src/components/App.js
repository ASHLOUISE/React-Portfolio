import React from 'react';
import './styles/styles.css';
import NavMenu from './NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
      <>
      <Router>
        <NavMenu />
      </Router>
      </>
    );
}
