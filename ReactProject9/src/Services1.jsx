import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar1'

const Services1 = () => {
    
  return (
    <div>
    <section className='parent'>
     <aside className='options'><br></br>      
      <Link className='link'>Book your Dream</Link>
      <Link className='link'>Service Station</Link>
      <Link className='link'>Customization</Link>
      <Link className='link'>Road Side Assistance</Link>
      <Link className='link'>Explore More</Link>
      </aside>

     <aside className='result'></aside>
     </section>
    </div>
  )
}

export default Services1
