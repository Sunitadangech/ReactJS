import React from 'react'
import Navbar1 from './Navbar1'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home1 from './Home1'
import About1 from './About1'
import Services1 from './Services1'
const Router1 = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar1/>

        <Routes>
            <Route path='/home' element={<Home1/>}/>
            <Route path='/about' element={<About1/>}/>
            <Route path='/services' element={<Services1/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router1
