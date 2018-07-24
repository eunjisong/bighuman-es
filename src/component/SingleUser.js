import React from "react";
import { connect } from "react-redux";

class SingleUser extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    user: state.users.data && state.users.data.find(a => a.id == id)
  };
};

export default connect(mapState)(SingleUser);
