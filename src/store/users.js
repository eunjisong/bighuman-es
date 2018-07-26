// I haven't hooked up the server yet it gives me crossDomain issues.

import axios from 'axios';
const server = 'https://bh-interview.now.sh';

const GET_USER = 'GET_USER';
const NEW_POST = 'NEW_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';


const getUser = users => ({type: GET_USER, users});
const newPost = user => ({type: NEW_POST, user});
const clearPosts = posts => ({type: CLEAR_POSTS, posts});


// **GET /users**
export const fetchUsers = () =>
    dispatch =>
      axios.get(`${server}/users`)
        .then( res => res.data)
        .then( data => dispatch(getUser(data)))
        .catch( err => console.error('error fetchingUsers', err))


// **POST /users/:userId/posts**
export const postNewPost = (userId, post) =>
    dispatch =>
      axios.post(`${server}/users/${userId}/posts`, post)
        .then( res => res.data )
        .then( data => dispatch(newPost(data)))
        .catch( err => console.error('error posting a new post', err))


// **GET /users/posts/clear**
export const emptyPosts = () =>
    dispatch =>
      axios.get(`${server}/users/posts/clear`, )
        .then( res => res.data )
        .then( data => dispatch(clearPosts(data)))
        .catch( err => console.error('error clearing all posts for all users', err))



export default ( state=[], action) => {
    switch(action.type) {
      case GET_USER:
        return action.users;
      case NEW_POST:
        return state.data = state.data.map( user => {
          if(user.id == action.post.data.id) {
            user.posts = action.post.data.posts
            return user;
          } else return user;
        })
      case CLEAR_POSTS:
        return state.data = state.data.map( user => {
          user.posts = [];
          return user;
        })
      default:
       return state;
    }
}
