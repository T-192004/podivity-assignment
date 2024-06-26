// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../utils/mockAPI';
import { Link } from 'react-router-dom';
import {PostContainer,  HomeBtn, 
    BtnContainer,} from '../styles/GlobalStyle'


const BlogPost = () => {
  
  const { id } = useParams();
  const post = getPostById(id);

  if (post === undefined) return <div>Post not found</div>;
    console.log(post);
  return (
    <>
    <BtnContainer>
            <Link to="/"> <HomeBtn>Home</HomeBtn></Link>
            <Link to="/add-edit-post"> <HomeBtn>Create New Blog</HomeBtn></Link>
        </BtnContainer>
    <PostContainer>
      <h1>{post.title}</h1>
      <p1> ~ By {post.author} </p1>
      <p>{post.content}</p>
      <p>{post.date}</p>
      <Link to="/add-edit-post"><button>Create New Post</button></Link>
    </PostContainer>
    </>
  );
};

export default BlogPost;
