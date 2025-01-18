import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Navbar from './Navbar'
const Router = () => {
  return (
    <div>
    
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router