import axios from 'axios';
const server = 'https://bh-interview.now.sh';



const GET_USER = 'GET_USER';
const NEW_POST = 'NEW_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';


const getUser = users => ({type: GET_USER, users});
const newPost = post => ({type: NEW_POST, post});
const clearPosts = posts => ({type: CLEAR_POSTS, posts});


// **GET /users**
export const fetchUsers = () =>
    dispatch =>
      axios.get(`${server}/users`)
        .then( res => dispatch(getUser(res.data)))
        .catch( err => console.error('error fetchingUsers', err))


// **POST /users/:userId/posts**
export const postNewPost = (userId, newPost) =>
    dispatch =>
      axios.post(`${server}/users/${userId}/posts`, newPost)
        .then(res => dispatch(newPost(res.data)))
        .catch( err => console.error('error posting a new post', err))


// **GET /users/posts/clear**
export const emptyPosts = () =>
    dispatch =>
      axios.get(`${server}/users/posts/clear`)
        .then( res => dispatch(clearPosts(res.data)))
        .catch( err => console.error('error clearing all posts for all users', err))



export default ( state=[], action) => {
    switch(action.type) {
      case GET_USER:
        return action.users;
      case NEW_POST:
        return [...state, action.post];
      case CLEAR_POSTS:
        return state.map( user => users.posts = []);
      default:
       return state;
    }
}
