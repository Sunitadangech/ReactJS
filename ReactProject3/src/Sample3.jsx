// import React,{useState} from 'react'

// const Sample3 = () => {
//     let [count,setCount]=useState(0);

//     function inc(){
//         setCount(count+5);
//     }

//     function dec(){
//         setCount(count-5);
//     }
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={inc}>Inc +</button>
//       <button onClick={dec}>Dec -</button>
//     </div>
//   )
// }

// export default Sample3



import React,{useState} from 'react'

const Sample3 = () => {
    let [count,setCount]=useState(0);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>{setCount(count+1)}}>Inc +</button>
      <button onClick={() =>{setCount(count-1)}}>Dec +</button>
    </div>
  )
}

export default Sample3
