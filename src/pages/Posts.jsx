import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import style from '../css/Posts.module.css';
import { useFetching } from '../hooks/useFetching';
import Loader from  '../components/UI/Loader';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  }); 

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {isPostsLoading
        ? <Loader/>
        : 
        <div className={style.container}>
            <ul className={style.posts}>
              {
                posts.map( post => 
                  <li className={style.post} key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
              )}
            </ul>
        </div>
      }
    </>
  )
}
