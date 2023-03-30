import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserService from '../API/UserService'
import style from '../css/Posts.module.css'
import { useFetching } from '../hooks/useFetching';
import Loader from  '../components/UI/Loader';

export default function userPosts() {
    const param = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const [fetchUserPosts, isUserPostsLoading, userPostsError] = useFetching(async () => {
      const users = await UserService.getUserPosts(param.id);
      setUserPosts(users);
    }); 

    useEffect(() => {
      fetchUserPosts();
    }, [])

  return (
    <>
      {isUserPostsLoading
        ? <Loader/>
        :  // post-container
        // style['post-container']
        <div className={style.container}> 
          {localStorage.getItem('userName') && <h1>{localStorage.getItem('userName')}</h1>}
          <ul className={style.posts}>
            {
              userPosts.map(post => 
                <li className={style.post} key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              )
            }
          </ul>
        </div>
      }
    </>
   
  )
}
