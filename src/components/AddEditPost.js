// src/components/AddEditPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, savePost } from '../utils/mockAPI';
import {BlogForm, CreateBtn} from '../styles/GlobalStyle'


const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const now = new Date();
  const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const [post, setPost] = useState({ title: '', author: '', content: '', date: formattedDate });

  useEffect(() => {
    if (id) {
      const existpost = getPostById(Number(id));
      if (existpost) setPost(existpost);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    savePost(post);
    navigate('/');
  };

  return (
    <BlogForm>
        <form onSubmit={handleSubmit}>
        <h1>Create a New Blog Post</h1>
        <div>
            <label>Title</label>
            <input name="title" value={post.title} placeholder='Add Title' onChange={handleChange} required />
        </div>
        <div>
            <label>Author</label>
            <input name="author" value={post.author} placeholder='Add Author Name' onChange={handleChange} required />
        </div>
        <div>
        <label>Content</label>
        <textarea name="content" value={post.content} placeholder='Add Content' onChange={handleChange} required />
        </div>
        <CreateBtn type="submit">{id ? 'Update' : 'Create New'} Blog</CreateBtn>
        </form>
    </BlogForm>
  );
};

export default AddEditPost;
