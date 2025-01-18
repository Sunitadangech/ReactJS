import React from 'react'
import UseCounter from './UseCounter'
const Counter1 = () => {
    let [count,increment,decrement] = UseCounter(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter1
