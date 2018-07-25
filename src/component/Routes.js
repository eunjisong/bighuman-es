import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchUsers } from '../store';

import { AllPosts, AllUsers, SingleUser, Home, PostForm} from './index'

class Routes extends React.Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    return(
    <Switch>
        <Route exact path="/" component={PostForm}/>

        <Route exact path="/users" component={AllUsers}/>
        <Route exact path="/users/:id" component={SingleUser}/>

        <Route exact path="/posts" component={AllPosts}/>

    </Switch>
    )
  }


}


const mapState = state => {
  return {
    users: state.users
  };
};

const mapDispatch = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default withRouter(connect(mapState, mapDispatch)(Routes))
