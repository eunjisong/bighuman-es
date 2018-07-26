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
    event.preventDefault();
    const id = this.props.user.id;
    let newMessage = this.state;
    this.props
      .postNewPost(id, newMessage)
      .then(() => this.setState({ content: "", poster: "" }));
  }

  render() {
    const firstName = this.props.user.name.split(' ')[0]
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>

        <div className="inputItem">

          <div className="formItem form-group">
            <textarea
              className="form-control"
              placeholder={`Say hi to ${firstName}`}
              type="textarea"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>

          <div className="formItem form-group">
            <input
              className="form-control"
              placeholder="My name is..."
              type="text"
              onChange={this.handleChange}
              name="poster"
              value={this.state.poster}
            />
          </div>

        </div>

        <div className="inputItem">

          <button type="submit" className="btn submitButton">
            Submit
          </button>

        </div>
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
