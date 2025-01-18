import React,{useState,useMemo} from 'react'

const UseMemo = () => {
    let [add , setAdd] = useState(0)
    let [sub , setSub] = useState(100)

    let mult = useMemo (function multiply() {
        console.log("*****");
        return add * 10
        
    },[add])
  return (
    <div>
      <h1>useMemo Hook</h1>

      <h1>{add} and {mult}</h1>
      <button onClick={()=>{setAdd(add+1)}}>Addition</button>

      <h1>{sub}</h1>
      <button onClick={()=>{setSub(sub-1)}}>Substraction</button>
    </div>
  )
}

export default UseMemo
