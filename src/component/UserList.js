import React from "react";
import { Link } from "react-router-dom";

export default class UserList extends React.Component {
  render() {
    const { users, id } = this.props;

    return (
      <div>
        <div>
          {users && (
            <ul className="names">
              {users.map(a => (
                <Link key={a.id} style={{ textDecoration: "none" }} to={`/bighuman-es/users/${a.id}`}>
                  <li
                    style={{
                      backgroundColor: id === a.id ? " #6B848F": "#C2CCD1"
                    }}
                  >
                    {a.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
