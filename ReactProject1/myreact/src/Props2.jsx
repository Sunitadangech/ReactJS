import React from 'react'

const Props2 = prop2 => {
    let style = {
        color:"black",
        backgroundColor:prop2.color,
        border:"1px dashed black",
        textAlign:"center",
    };
  return (
    <div>
        <h1 style={style}>{prop2.text}</h1>
    </div>
  )
}

export default Props2