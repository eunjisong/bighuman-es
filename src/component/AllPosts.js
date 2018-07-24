import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { emptyPosts } from '../store'

class AllPosts extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.emptyPosts();
    window.location.reload();

  }

  render() {
    return (
      <div>
        <h1>All Posts</h1>
        <button onClick={this.handleClick} type="submit">Clear All Posts</button>

        {

          this.props.users &&
          this.props.users.map( a => {
            return a.posts.map( aPost => {
              return (

              <div >
                <p>{aPost.content}</p>
                <p>{aPost.poster}</p>
                <br/>
              </div>

              )
            })
          }

          )
        }


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
  }
}


export default connect(mapState, mapDispatch)(AllPosts);
