import React,{useReducer} from 'react'

const UseReducer = () => {
    let reducer = (state ,action) => {
        switch(action.type){
                case "inc":
                return state + 1;

                case "dec":
                return state-1;

                case "res":
                return state = 0;

                default:
                    break;
        }
    }
    let [count,dispatch] = useReducer(reducer ,0)
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch({type:"inc"})}>Increment</button>
      <button onClick={() => dispatch({type:"dec"})}>Decrement</button>
      <button onClick={() => dispatch({type:"res"})}>Reset</button>
    </div>
  )
}

export default UseReducer
