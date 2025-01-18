// import React,{createContext} from 'react';
// import UseContext from "./UseContext.jsx";
// import UseContext1 from "./UseContext1.jsx";

//   //Creating the context to send the data from any component.
//   let data1 = createContext()
//   let data2 = createContext()
//   let imageData = createContext()

// const App = () => {
//   const name = "Sunita"
//   const genz = "female"
//   const image = "https://m.media-amazon.com/images/I/51JwLNpv7NL._AC_.jpg"
//   return (
//     <div>
//       {/* <h1>{name}</h1> */}
//       {/* <h1>{genz}</h1> */}

//       {/* sending the data to the component by Provider methond and value prop*/}

//       <data1.Provider value={name}>
//         <data2.Provider value={genz}>
//           <imageData.Provider value={image}>
//                     <UseContext/>
//                     <UseContext1/>
//           </imageData.Provider>
//         </data2.Provider>
        
//       </data1.Provider>
      
//     </div>
//   )
// }

// export default App
// export {data1}
// export {data2}
// export {imageData}



// import React from 'react'
// import UseMemo from './UseMemo'
// const App = () => {
//   return (
//     <div>
//       <UseMemo/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import HOC from './HOC'
import Counter from './Counter'
const App = () => {
  return (
    <div>
      <HOC comp={Counter}/>
    </div>
  )
}

export default App
