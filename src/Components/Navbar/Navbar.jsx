import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className='Navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menue">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li> 
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar