import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-link" to={`/home`}>
        GuestBook
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to={`/home`}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/messages`}>
              Sent Messages
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
