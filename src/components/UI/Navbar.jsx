import { Link } from 'react-router-dom'
import React from 'react'
import styles from '../../css/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
    <li><Link to="/users">users</Link></li>
    <li><Link to="/posts">posts</Link></li>
    <li><Link to="/about">about</Link></li>
    <li><Link to="/counter">counter</Link></li>
  </ul>
  )
}
