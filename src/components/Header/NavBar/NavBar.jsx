import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return <nav>
    <ul className="nav-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
  </nav>
};

export default NavBar;
