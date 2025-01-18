import React,{useContext} from 'react'
import {data1,data2} from './App.jsx'

const UseContext = () => {
    let firstName = useContext(data1);
    let genz = useContext(data2);
  return (
    <div>My name is {firstName} and gender is {genz}</div>
  )
}

export default UseContext