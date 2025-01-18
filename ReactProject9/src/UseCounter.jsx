import React,{useState}from 'react'

const UseCounter = (initialval = 0) => {
    let [count,setCount]= useState(initialval)
    let increment = () => {
        setCount(count + 1)
    }
    let decrement = () =>{
        setCount(count-1)
    }
  return [count,increment,decrement]
}

export default UseCounter
