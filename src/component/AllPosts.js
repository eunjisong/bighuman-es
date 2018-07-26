import React from "react";
import { connect } from "react-redux";
import { emptyPosts } from "../store";

class AllPosts extends React.Component {
  constructor() {
    super();


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.emptyPosts()
  }

  render() {
    return (
      <div>

          <div>
            <button onClick={this.handleClick} type="submit">
              Delete All Posts!
            </button>

            <div className="allPosts">
              {
                this.props.users &&
                this.props.users.map(user => {
                  let firstName = user.name.split(" ")[0];
                  return user.posts.length > 0 && user.posts.map((aPost, i) => {
                    return (
                      <div key={user.id + i} className="aPost">
                        {console.log(user.id + i)}
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
    emptyPosts: () => dispatch(emptyPosts())
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllPosts);
