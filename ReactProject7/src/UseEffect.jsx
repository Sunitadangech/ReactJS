import React, {useState} from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    let [count , setCount] =useState(0)

    useEffect(() => {
        let task = setInterval(() => {
            setCount(count + 1)
        },1000)
        return () => {
            clearInterval(task)
        }
    },[count])

  return (
    <div>
      <h1>Count - {count}</h1>
    </div>
  )
}

export default UseEffect
