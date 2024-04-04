import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div>
      <h1>Welcome to StudSpace</h1>
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/myspace">My Space</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/space">Space</Link></li>
      </ul>
    </div>
  )
}

export default Home
