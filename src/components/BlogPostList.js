import {getPosts, deletePost, } from '../utils/mockAPI'
// import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  BlogList,
  CreateBtn,
  HomeBtn, 
  BtnContainer,
} from '../styles/GlobalStyle'
import EmptyList from './EmptyList'
import { Link } from 'react-router-dom';


const BlogPostList = () => {
    const [blogPosts, setBlogPost] = useState([]);
    useEffect( () => {
        const posts = getPosts();
        setBlogPost(posts);
    }, []);
    console.log(blogPosts);
    const handleDelete = (id) => {
        deletePost(id);
        setBlogPost(getPosts());
      };
    if (blogPosts.length === 0 ) {
        return <EmptyList />
    } else {
    return (
        <>
        <BtnContainer>
            <Link to="/"> <HomeBtn>Home</HomeBtn></Link>
            <Link to="/add-edit-post"> <HomeBtn>Create New Blog</HomeBtn></Link>
        </BtnContainer>
        <BlogList>
            {blogPosts.map( post =>{ 
                const postDate = new Date(post.date);
                const isValidDate = !isNaN(postDate);
                return (
                
                <li key={post.id}>
                    <h1>{post.title}</h1>                  
                    <div>
                        <div1>  
                            <p1>By - {post.author}</p1>
                            <p>{isValidDate ? `${formatDistanceToNow(postDate)} ago` : ''}</p>
                            <p>{post.content.substring(0, 100)}...</p>
                            <Link to={`/post/${post.id}`}>
                                <HomeBtn>View Blog</HomeBtn>
                            </Link>
                        </div1>
                        <div2> 
                            <button onClick={() => handleDelete(post.id)}>
                                <RiDeleteBin6Line size={20} />
                            </button>
                            {/* <Link to={`/add-edit-post`}>
                                <button >                               
                                    <FaEdit size={20} />
                                </button>
                            </Link> */}
                        </div2>
                    </div>
                </li>
                
            )})}
        </BlogList>

        </>
    )}
}

export default BlogPostList