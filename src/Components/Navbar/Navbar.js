import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar-container'>
        <ul>
            <li> <a href="./about">About Us</a></li>
            <li> <a href="./for-you">For you</a></li>
            <li> <a href="./contact">Contact</a></li>
            <li> <a href="./blog">Blog</a></li>
            <li> <a href="./vlog">VLog</a></li>
            <li> <a href="./services">Services</a></li>
        </ul>
    </div>
  )
}

export default Navbar