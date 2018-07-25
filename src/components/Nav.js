import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav px-5 py-1 w-100 d-flex flex-row justify-content-between">
        <Link className="nav-name mb-0 mt-1" to="/about">
          Katie Boedges
        </Link>
        <div className="nav-nav">
          <ol className="d-flex flex-row justify-content-between list-unstyled mb-0">
            <Link className="nav-item mt-1 current-page" to="/about">
              About
            </Link>
            <Link className="nav-item ml-4 mt-1" to="/education">
              Education
            </Link>
            <Link className="nav-item ml-4 mt-1" to="/work">
              Work
            </Link>
          </ol>
        </div>
      </div>
    );
  }
}

export default Nav;
