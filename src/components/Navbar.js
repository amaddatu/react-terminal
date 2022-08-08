import React from 'react';
import {Link, useMatch} from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Terminal
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${useMatch('/') ? "active" : ""}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${useMatch('/about') ? "active" : ""}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/interactive" className={`nav-link ${useMatch('/interactive') ? "active" : ""}`}>Interactive</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};