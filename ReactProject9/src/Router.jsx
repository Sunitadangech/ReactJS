import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Navbar from './Navbar'
import About from './About'
import BookNow from './BookNow'
import Buy from './Buy'
import Care from './Care'
import Details from './Details'
const Router = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/services' element={<Services />}>
            <Route path='/services/bookNow' element={<BookNow/>}/>
            <Route path='/services/buynow' element={<Buy/>}/>
            <Route path='/services/care' element={<Care/>}/>
            <Route path='/services/details' element={<Details/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router