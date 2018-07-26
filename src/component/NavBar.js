import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav navContainer">
          <Link to="/" className="nav-link">
        <li className="nav-item">
            Home
        </li>
          </Link>
          <Link to="/users" className="nav-link">
        <li className="nav-item">
            People
        </li>
          </Link>
          <Link to="/posts" className="nav-link">
        <li className="nav-item">
            Posts
        </li>
          </Link>
      </ul>
    );
  }
}
