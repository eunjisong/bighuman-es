import React from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../store';

class AllUsers extends React.Component {


  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    console.log(this.props.users)
    return(
      <div>
        {this.props.users && console.log(this.props.users)}
      </div>
    )
  }
}

const mapState = state => {

  return {
    users: state.users
  }
}

const mapDispatch = { fetchUsers }

export default connect(mapState, mapDispatch)(AllUsers);
