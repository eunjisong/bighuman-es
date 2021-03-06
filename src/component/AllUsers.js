import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllUsers extends React.Component {
  render() {
    const { data } = this.props.users;
    return (
      <div className="allUsersContainer">



        {data &&
          data.map(user => (


            <div className="indivisual" key={user.id}>

                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: `/bighuman-es/users/${user.id}`, state: { user: user } }}>

                  <img src={user.image} alt={user.name} />

                  <div className="overlay" style={{backgroundColor: Math.round(Math.random()) === 0 ? "#93c6d6" : "#c9d2d6"}}>
                        <div className="indivisualName">{user.name}</div>
                  </div>
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
