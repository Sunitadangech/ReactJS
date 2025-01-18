import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import About from './About'

const Navbar1 = () => {

  return (

    <div>
      <nav className='navbar'>
      <ul>
      <Link to="/home">  <li>Home</li>   </Link>

      <Link to="about">  <li>About</li>  </Link>

      <Link to="services">  <li>Services</li>  </Link> 
      
      </ul>
      </nav>
    </div>
  )
}

export default Navbar1
