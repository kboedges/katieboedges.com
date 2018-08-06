import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav px-5 py-2 w-100 d-flex justify-content-between">
        <Link className="nav-name mb-0" to="/about">
          Katie Boedges
        </Link>
        <div className="nav-nav">
          <ol className="nav-list d-flex justify-content-between list-unstyled mb-0">
            <li>
              <NavLink className="nav-item mt-1" activeClassName="current-page" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item mt-1" activeClassName="current-page" to="/education">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item mt-1" activeClassName="current-page" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item mt-1" activeClassName="current-page" to="/resume">
                Resume
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Nav;
