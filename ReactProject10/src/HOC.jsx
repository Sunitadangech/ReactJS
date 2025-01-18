import React from 'react'

const HOC = (props) => {
  return (
    <div>
    <div style={{background :"orange" , width:"200px" , height:"250px"}}>
      <h1>Orange Counter</h1><props.comp/>
    </div>

    <div style={{background :"crimson" , width:"200px" , height:"250px"}}>
      <h1>Crimson Counter</h1><props.comp/>
    </div>

    <div style={{background :"green" , width:"200px" , height:"250px"}}>
      <h1>Green Counter</h1><props.comp/>
    </div>

    <div style={{background :"brown" , width:"200px" , height:"250px"}}>
      <h1>Brown Counter</h1><props.comp/>
    </div>
    </div>
    
  )
}

export default HOC
