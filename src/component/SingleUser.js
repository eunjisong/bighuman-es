import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleUser extends React.Component {

  render() {
    const { users, user } = this.props;
    const color = this.props.match.params.id;

    return (
      <div>
        {/* List of all Users */}
        {users && (
          <ul className="names">
            {users.map(a => (
              <Link style={{ textDecoration: "none" }} to={`/users/${a.id}`}>
                <li
                  style={{
                    backgroundColor: color === a.id ? "#f4b942" : "#569eeb"
                  }}
                >
                  {a.name}
                </li>
              </Link>
            ))}
          </ul>
        )}

        {/* Single User Rendering */}
        {user && (
          <div className="singleUserContainer">

            <div className="identity">
              <img src={user.image} alt={user.name} />
              <h2>{user.name}</h2>
            </div>

            <div className="allPosts">
              {user.posts &&
                user.posts.map(aPost => {
                  return (
                    <div className="singlePost">
                      <h3>content:</h3>
                      <p>{aPost.content}</p>
                      <h3>poster:</h3>
                      <p>{aPost.poster}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    users: state.users.data,
    user: state.users.data && state.users.data.find(a => a.id == id)
  };
};

export default connect(mapState)(SingleUser);
