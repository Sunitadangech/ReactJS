import React from 'react'

const Sample1 = () => {
    let task= event =>{
        console.log(event.preventDefault());
        console.log(event);
   };
  return (
    <>
      <button onContextMenu={task}>Click</button>
    </>
  )
}

export default Sample1
