// src/utils/mockAPI.js
import {v4 as uuidv4} from 'uuid'
export const getPosts = () => {
  return JSON.parse(localStorage.getItem('BlogPosts')) || [];
};
  
export const getPostById = (id) => {
  const posts = getPosts();
  return posts.find(post => post.id === id);
};
  
export const savePost = (post) => {
  const posts = getPosts();
    if (post.id) {
      const index = posts.findIndex(p => p.id === post.id);
      posts[index] = post;
  } else {
    post.id = uuidv4();
    posts.push(post);
  }
    localStorage.setItem('BlogPosts', JSON.stringify(posts));
};
  
export const deletePost = (id) => {
  let posts = getPosts();
  posts = posts.filter(post => post.id !== id);
  localStorage.setItem('BlogPosts', JSON.stringify(posts));
};
  