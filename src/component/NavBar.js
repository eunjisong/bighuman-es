import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <ul className="navContainer">
          <Link to="/bighuman-es/" className="nav-link">
        <li >
            Home
        </li>
          </Link>
          <Link to="/bighuman-es/users" className="nav-link">
        <li >
            People
        </li>
          </Link>
          <Link to="/bighuman-es/posts" className="nav-link">
        <li >
            Posts
        </li>
          </Link>
      </ul>
    );
  }
}
