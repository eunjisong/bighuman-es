import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllUsers extends React.Component {

  render() {
    const { data } = this.props.users;
    return (
      <div>
        {data &&
          data.map(user => (
            <div key={user.id}>

              <Link to={{ pathname: `/users/${user.id}`, state: { user: user} }}>

                <h3>{user.name}</h3>
                <img src={user.image} alt={user.name} />
              </Link>

            </div>
          ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users
  };
};


export default connect(mapState)(AllUsers);
