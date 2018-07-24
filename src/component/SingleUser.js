import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class SingleUser extends React.Component {
  render() {
    const {users, user} = this.props;

    return (
      <div>
      {
        users &&
        <ul>
          { users.map( a => <Link to={`/users/${a.id}`}><li>{a.name}</li></Link>)}
        </ul>

      }

      { user &&
      <div>
        <img src={user.image} alt={user.name} />
        <h2>{user.name}</h2>

        {
          user.posts && user.posts.map( aPost => {
            return (
              <div className="postContainer">
                <h3>content:</h3>
                <p>{aPost.content}</p>
                <h3>poster:</h3>
                <p>{aPost.poster}</p>
              </div>
            )
          })
        }

        </div>
      }
      </div>
    )
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
