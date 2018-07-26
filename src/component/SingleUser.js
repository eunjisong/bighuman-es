import React from "react";
import { connect } from "react-redux";
import { PostForm, UserPosts, UserList } from "./index";


class SingleUser extends React.Component {
  constructor() {
    super();
    this.state = {
      option: "form",
      new: false
    };

    this.toggleOption = this.toggleOption.bind(this);
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  toggleOption(option) {
    this.setState({ option });
  }

  handleNewPost(news){
    this.setState({ new: news})
  }

  render() {
    const { users, id } = this.props;
    const { option } = this.state;
    let user;

    for(var single in users){
      if(users[single].id == id) user = users[single]
    }
    this.state.new && console.log(this.state.new)
    const firstName = user && user.name.split(" ")[0];
    return (
      <div>
        <div>
          {users &&
            user && (
              <div>
                <UserList id={user.id} users={users} />

                <div>
                  <div className="singleUserContainer">
                    {/* User's image and name */}
                    <div className="identity" style={{backgroundColor:
                              option === "form" ? "#8fd3f4" : "#f4b942"}}>
                      <img src={user.image} alt={user.name} />
                      <h2>{user.name}</h2>
                    </div>

                    {/* User's two option */}
                    <div className="optionsContainer">
                      <div className="options">
                        <button
                          style={{
                            borderRadius: "0",
                            backgroundColor:
                              option === "form" ? "#f4b942" : "white"
                          }}
                          className="btn"
                          onClick={() => this.toggleOption("form")}
                        >
                          New Post
                        </button>

                        <button
                          style={{
                            borderRadius: "0",
                            backgroundColor:
                              option === "list" ? "#8fd3f4" : "white"
                          }}
                          className="btn"
                          onClick={() => this.toggleOption("list")}
                        >
                          {`${firstName}'s Posts`}
                        </button>
                        {/* {this.state.new &&
                        <div className="new">
                          new!
                        </div>} */}
                      </div>

                      {this.state.option == "form" ? (
                        <PostForm handle={this.handleNewPost} users={users} user={user} option={this.state.option} />
                      ) : (
                        <UserPosts user={user} new={this.state.new} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>

        {/* Single User Rendering */}
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    users: state.users.data,
    id: id
  };
};

export default connect(mapState)(SingleUser);
