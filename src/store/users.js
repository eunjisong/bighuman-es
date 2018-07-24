import axios from 'axios';
const serverUrl = 'https://bh-interview.now.sh';



const GET_USER = 'GET_USER';
const NEW_POST = 'NEW_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';


const getUser = users => ({type: GET_USER, users});
const newPost = post => ({type: NEW_POST, post});
const clearPosts = posts => ({type: CLEAR_POSTS, posts});

// export const fetchUsers => () =>
//     dispatch =>

