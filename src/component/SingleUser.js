import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PostForm, UserPosts } from "./index";

class SingleUser extends React.Component {
  constructor() {
    super();
    this.state = {
      option: "form"
    };

    this.toggleOption = this.toggleOption.bind(this);
  }

  toggleOption(option) {
    this.setState({ option });
  }

  render() {
    const { users, user } = this.props;
    const color = this.props.match.params.id;

    return (
      <div>

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
        </div>


        <div>
        {/* Single User Rendering */}
        {user && (
          <div className="singleUserContainer">
            <div className="identity">
              {/* <img src={user.image} alt={user.name} /> */}
              <h2>{user.name}</h2>
            </div>


        {/* Single User's option */}
            <div className="options">
              <button onClick={() => this.toggleOption("form")}>
                New Post
              </button>
              <button onClick={() => this.toggleOption("list")}>{`${
                user.name.split(" ")[0]
              }'s Posts`}</button>
              {this.state.option == "form" ? (
                <PostForm user={user} />
              ) : (
                <UserPosts user={user} />
              )}
            </div>
          </div>
        )}
        </div>


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
