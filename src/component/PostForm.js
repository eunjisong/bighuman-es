import React from "react";
import { connect } from "react-redux";
import { postNewPost } from "../store";


class PostFrom extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      poster: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const id = this.props.user.id;
    let newMessage = this.state;
    this.props.user.posts.push(newMessage)
    this.setState({[event.target.name]: ''})
    this.props.postNewPost(id, this.props.users);
    event.preventDefault();
  }

  render() {
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <div className="formItem form-group">
          <textarea
            className="form-control"
            placeholder="content"
            type="textarea"
            onChange={this.handleChange}
            name="content"
          />
        </div>

        <div className="formItem form-group">

          <input
            className="form-control"
            placeholder="name"
            type="text"
            onChange={this.handleChange}
            name="poster"
          />
        </div>

        <button type="submit" className="btn submitButton">Submit</button>

      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    postNewPost: (id, item) => dispatch(postNewPost(id, item))
  };
};

export default connect(
  null,
  mapDispatch
)(PostFrom);
