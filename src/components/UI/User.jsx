import React from 'react'
import {useNavigate} from 'react-router-dom'

//useHistory

export default function User({name, email, id}) {
    const navigate = useNavigate();

    function renderPage() {
        localStorage.setItem('userName', name);
        navigate(`/user-posts/${id}`)
    }

    return (
    <>
    <span onClick={renderPage}>{name}</span>
    <span>email: {email}</span>
    </>
  )
}
