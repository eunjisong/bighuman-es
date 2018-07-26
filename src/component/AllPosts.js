import React from "react";
import { connect } from "react-redux";
import { emptyPosts, fetchUsers } from "../store";

class AllPosts extends React.Component {
  constructor() {
    super();


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.emptyPosts()
      .then( () => this.props.fetchUsers())
  }

  render() {
    return (
      <div>

          <div>
            <button onClick={this.handleClick} type="submit">
              Delete All Posts!
            </button>

            <div className="allPosts">
              {this.props.users &&
                this.props.users.map(a => {
                  let firstName = a.name.split(" ")[0];
                  return a.posts.map(aPost => {
                    return (
                      <div className="aPost">
                        <p>{`Hey ${firstName},`}</p>
                        <p>{aPost.content}</p>
                        <p>{`- ${aPost.poster}`}</p>
                        <br />
                      </div>
                    );
                  });
                })}
            </div>
          </div>

      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.data
  };
};

const mapDispatch = dispatch => {
  return {
    emptyPosts: () => dispatch(emptyPosts()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllPosts);
