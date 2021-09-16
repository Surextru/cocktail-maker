import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
