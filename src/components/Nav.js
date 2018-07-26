import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav px-5 py-2 w-100 d-flex flex-row justify-content-between">
        <Link className="nav-name mb-0 mt-1" to="/about">
          Katie Boedges
        </Link>
        <div className="nav-nav">
          <ol className="d-flex flex-row justify-content-between list-unstyled mb-0">
            <NavLink className="nav-item mt-1" activeClassName="current-page" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item ml-4 mt-1" activeClassName="current-page" to="/education">
              Education
            </NavLink>
            <NavLink className="nav-item ml-4 mt-1" activeClassName="current-page" to="/projects">
              Projects
            </NavLink>
          </ol>
        </div>
      </div>
    );
  }
}

export default Nav;