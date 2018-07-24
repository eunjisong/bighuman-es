import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import { AllPosts, AllUsers, SinglePost, SingleUser} from './index'

class Routes extends React.Component {

  componentDidMount(){
    this.props.fetchUsers()
  }



}

const mapState = state => {

  return {
    users: state.users
  }
}

const mapDispatch = { fetchUsers }


export default connect(mapState, mapDispatch)(Routes)
