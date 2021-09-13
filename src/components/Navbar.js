import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
