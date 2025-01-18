import React,{useContext} from 'react'
import {imageData} from "./App.jsx"
const UseContext1 = () => {
    let image = useContext(imageData)
  return (
    <div>
        <img src={image} alt="Image not found"></img>
    </div>
  )
}

export default UseContext1