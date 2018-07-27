// I haven't hooked up the server yet it gives me crossDomain issues.

import axios from 'axios';
const server = 'https://bh-interview.now.sh';

const GET_USER = 'GET_USER';
const NEW_POST = 'NEW_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';


const getUser = users => ({type: GET_USER, users});
const newPost = user => ({type: NEW_POST, user});
const clearPosts = empty => ({type: CLEAR_POSTS, empty});


// **GET /users**
export const fetchUsers = () =>
    dispatch =>
      axios.get(`${server}/users`)
        .then( res => res.data)
        .then( data => dispatch(getUser(data)))
        .catch( err => console.error('error from the fetchUsers thunk', err))


// **POST /users/:userId/posts**
export const postNewPost = (userId, user) =>
    dispatch =>
      axios.post(`${server}/users/${userId}/posts`, user)
        .then( res => res.data )
        .then( data => dispatch(newPost(data)))
        .catch( err => console.error('error from the postNewPost thunk', err))


// **GET /users/posts/clear**
export const emptyPosts = () =>
    dispatch =>
      axios.get(`${server}/users/posts/clear`)
        .then( res => res.data )
        .then( data => dispatch(clearPosts(data)))
        .catch( err => console.error('error from clearing all posts for all users', err))



        export default ( state=[], action) => {
          switch(action.type) {
            case GET_USER:
              return action.users;
            case NEW_POST:
              let idx = +action.user.data.id - 1
              state.data.splice(idx, 1, action.user.data)
              return { ...state, data: state.data}
            case CLEAR_POSTS:
            const usersNoPosts = state.data.map( a => {a.posts = []; return a;})
            return { ...state, data: usersNoPosts}
            default:
             return state;
          }
      }
