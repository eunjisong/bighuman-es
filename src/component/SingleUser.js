import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleUser extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };

    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

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

            <div className="idendity">
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
        <button
          title="Back to top"
          className="scroll"
          onClick={this.scrollToTop}
        >
          <span className="arrow-up glyphicon glyphicon-chevron-up" />
        </button>
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
