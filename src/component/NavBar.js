import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav navContainer">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            People
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts" className="nav-link">
            Talks
          </Link>
        </li>
      </ul>
    );
  }
}
