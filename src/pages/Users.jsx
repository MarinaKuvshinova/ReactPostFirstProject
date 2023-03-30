import React, { useEffect, useState } from 'react'
import UserService from '../API/UserService'
import User from '../components/UI/User';
import style from '../css/Users.module.css'
import { useFetching, useFetchingRefactored, useFetchingQuery } from '../hooks/useFetching';
import Loader from  '../components/UI/Loader';


export default function Users() {
  // const [users, setUsers] = useState([]);
  // const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
  //   const users = await UserService.getAll();
  //   setUsers(users);
  // }); 

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

 //vertion 2 

  // const {data:users, isLoading} = useFetchingRefactored(UserService.getAll)

 //verion 3 

  const {data:users, isLoading} = useFetchingQuery("users", UserService.getAll)


  return (
    <>
      {isLoading
        ? <Loader/>
        : <UserList users={users} />
      }
    </>
  )
}


function UserList({users})
{
  return(
    <ul className={style.list}> {users && users.map(user =><li key={user.id} className={style.user}><User name={user.name} email={user.email} id={user.id} /></li>)}</ul>
  )
}